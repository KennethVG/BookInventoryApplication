package be.vdab.bookinventoryapp.repository;

import be.vdab.bookinventoryapp.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookJPARepository extends JpaRepository<Book, Integer> {
    List<Book> findByAuthor(String author);

    Book findByIsbn(String isbn);

    List<Book> findByTitleContainingOrAuthorContaining(String title, String author);

    List<Book> findByEbook(boolean ebook);

    Book findByTitleOrAuthor(String title, String author);
}
