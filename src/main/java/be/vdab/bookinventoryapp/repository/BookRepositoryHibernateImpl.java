package be.vdab.bookinventoryapp.repository;

import be.vdab.bookinventoryapp.model.Book;
import be.vdab.bookinventoryapp.model.Genre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("hibernate")
public class BookRepositoryHibernateImpl implements BookRepository {

    private final BookJPARepository repository;

    @Autowired
    public BookRepositoryHibernateImpl(BookJPARepository repository) {
        this.repository = repository;
    }

    @Override
    public int addBook(Book book) {
        Book b = repository.saveAndFlush(book);
        return b != null ? 1 : 0;
    }

    @Override
    public int updateBook(Book book) {
        if(repository.exists(book.getId())){
            repository.saveAndFlush(book);
            return 1;
        }
        else{
            return 0;
        }
    }

    @Override
    public int deleteBook(Book book) {
        repository.delete(book);
        Book shouldBeDeleted = repository.findOne(book.getId());
        return shouldBeDeleted == null ? 1 : 0;
    }


    @Override
    public int deleteBookById(int id) {
        repository.delete(id);
        Book shouldBeDeleted = repository.findOne(id);
        return shouldBeDeleted == null ? 1 : 0;
    }

    @Override
    public List<Book> findAll() {
        return repository.findAll();
    }

    @Override
    public List<Book> findByAuthor(String author) {
        return repository.findByAuthor(author);
    }

    @Override
    public List<Book> findByGenre(Genre genre) {
        return repository.findAll();
    }

    @Override
    public List<Book> findByKeyword(String keyword) {
        return repository.findByTitleContainingOrAuthorContaining(keyword, keyword);
    }

    @Override
    public List<Book> findByEbook(boolean ebook) {
        return repository.findByEbook(ebook);
    }

    @Override
    public Book findByIsbn(String isbn) {
        return repository.findByIsbn(isbn);
    }

    @Override
    public Book findByTitleAndAuthor(String title, String author) {
        return repository.findByTitleOrAuthor(title, author);
    }
}
