package be.vdab.bookinventoryapp.service;

import be.vdab.bookinventoryapp.model.Book;
import be.vdab.bookinventoryapp.model.Genre;

import java.util.List;

// BUSSINESS LOGIC
public interface BookService {

    int addBook(Book book);
    int updateBook(Book book);
    int deleteBook(Book book);
    int deleteBookById(int id);

    List<Book> findAll();
    List<Book> findByAuthor(String author);
    List<Book> findByGenre(Genre genre);
    List<Book> findByKeyword(String keyword);
    List<Book> findByEbook(boolean ebook);

    Book findByIsbn(String isbn);
    Book findByTitleAndAuthor(String title, String author);

}
