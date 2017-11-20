package be.vdab.bookinventoryapp.repository;

import be.vdab.bookinventoryapp.mapper.EnumMapper;
import be.vdab.bookinventoryapp.model.Book;
import be.vdab.bookinventoryapp.model.Genre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository("jdbc")
public class BookRepositoryJDBCImpl implements BookRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public BookRepositoryJDBCImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int addBook(Book book) {
        String query = "INSERT INTO book (author, ebook, genre, isbn, language, number_of_pages, publisher, title) VALUES (?,?,?,?,?,?,?,?);";
        Object[] args = {book.getAuthor(), book.isEbook(), book.getGenre().ordinal(), book.getIsbn(), book.getLanguage().ordinal(), book.getNumberOfPages(), book.getPublisher(), book.getTitle()};
        return jdbcTemplate.update(query, args);
    }

    @Override
    public int updateBook(Book book) {
        String query = "UPDATE book SET author=?, ebook=?, genre=?, isbn=?, language=?, number_of_pages=?, publisher=?, subject=?, title=? WHERE id = ?;";
        return jdbcTemplate.update(query, stmt -> {
            stmt.setString(1, book.getAuthor());
            stmt.setBoolean(2, book.isEbook());
            stmt.setInt(3, book.getGenre().ordinal());
            stmt.setString(4, book.getIsbn());
            stmt.setInt(5, book.getLanguage().ordinal());
            stmt.setInt(6, book.getNumberOfPages());
            stmt.setString(7, book.getPublisher());
            stmt.setString(9, book.getTitle());
            stmt.setInt(10, book.getId());
        });
    }

    @Override
    public int deleteBook(Book book) {
        return deleteBookById(book.getId());
    }

    @Override
    public int deleteBookById(int id) {
        String query = "DELETE FROM book WHERE id=?";
        return jdbcTemplate.update(query, id);
    }

    @Override
    public List<Book> findAll() {
        String query = "SELECT * FROM book;";
        return jdbcTemplate.query(query, (resultSet, i) -> getBook(resultSet));

    }

    @Override
    public List<Book> findByAuthor(String author) {
        String query = "SELECT * FROM book WHERE author = ?;";
        return jdbcTemplate.query(query, new Object[]{author}, (rs, row) -> getBook(rs));
    }

    @Override
    public List<Book> findByGenre(Genre genre) {
        String query = "SELECT * FROM book WHERE genre = ?;";
        return jdbcTemplate.query(query, new Object[]{genre}, (rs, row) -> getBook(rs));
    }

    @Override
    public List<Book> findByKeyword(String keyword) {
        String query = "SELECT * FROM book WHERE author LIKE ? OR title LIKE ?;";
        return jdbcTemplate.query(query, new Object[]{"%" + keyword + "%", "%" + keyword + "%"}, (rs, row) -> getBook(rs));
    }

    @Override
    public List<Book> findByEbook(boolean ebook) {
        String query = "SELECT * FROM book WHERE ebook = ?;";
        return jdbcTemplate.query(query, new Object[]{ebook}, (rs, row) -> getBook(rs));
    }

    @Override
    public Book findByIsbn(String isbn) {
        String query = "SELECT * FROM book WHERE isbn = ?;";
        return jdbcTemplate.queryForObject(query, new Object[]{isbn}, Book.class);
    }

    @Override
    public Book findByTitleAndAuthor(String title, String author) {
        String query = "SELECT * FROM book WHERE author = ? OR title = ?;";
        return jdbcTemplate.queryForObject(query, new Object[]{title, author}, Book.class);
    }

    private Book getBook(ResultSet resultSet) throws SQLException {
        Book book = new Book();
        book.setAuthor(resultSet.getString("author"));
        book.setTitle(resultSet.getString("title"));
        book.setEbook(resultSet.getBoolean("ebook"));
        book.setIsbn(resultSet.getString("isbn"));
        book.setNumberOfPages(resultSet.getInt("number_of_pages"));
        book.setPublisher(resultSet.getString("publisher"));
        book.setId(resultSet.getInt("id"));

        // ALS GENRE EN LANGUAGE NULL IS:
        String genre = resultSet.getString("genre");
        if (genre != null) {
            book.setGenre(EnumMapper.mapToGenre(Integer.parseInt(genre)));
        }

        String language = resultSet.getString("language");
        if (language != null) {
            book.setLanguage(EnumMapper.mapToLanguage(Integer.parseInt(language)));
        }
        return book;
    }
}
