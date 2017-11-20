package be.vdab.bookinventoryapp.service;

import be.vdab.bookinventoryapp.model.Book;
import be.vdab.bookinventoryapp.model.Genre;
import be.vdab.bookinventoryapp.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository repository;

    @Autowired
    public BookServiceImpl(@Qualifier("hibernate") BookRepository repository) {
        this.repository = repository;
    }

    @Override
    public int addBook(Book book) {
        return repository.addBook(book);
    }

    @Override
    public int updateBook(Book book) {
        return repository.updateBook(book);
    }

    @Override
    public int deleteBook(Book book) {
        return repository.deleteBook(book);
    }

    @Override
    public int deleteBookById(int id) {
        return repository.deleteBookById(id);
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
        return repository.findByGenre(genre);
    }

    @Override
    public List<Book> findByKeyword(String keyword) {
        return repository.findByKeyword(keyword);
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
        return repository.findByTitleAndAuthor(title, author);
    }
}
