package be.vdab.bookinventoryapp.controller;

import be.vdab.bookinventoryapp.model.Book;
import be.vdab.bookinventoryapp.model.Genre;
import be.vdab.bookinventoryapp.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.cors.CorsConfiguration;

@RestController
@RequestMapping("/books")
@CrossOrigin(CorsConfiguration.ALL)
public class BookController {

    private final BookService service;

    private final JdbcTemplate template;

    @Autowired
    public BookController(BookService service, JdbcTemplate template) {
        this.service = service;
        this.template = template;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity addBook(@RequestBody Book book) {
        return ResponseEntity.ok(service.addBook(book));
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public ResponseEntity deleteBook(@RequestBody Book book) {
        return ResponseEntity.ok(service.addBook(book));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteBook(@PathVariable Integer id) {
        return ResponseEntity.ok(service.deleteBookById(id));
    }

    @RequestMapping(value = "/author/{author}/", method = RequestMethod.GET)
    public ResponseEntity findByAuthor(@PathVariable String author) {
        return ResponseEntity.ok(service.findByAuthor(author));
    }

    @RequestMapping(value = "/keyword/{keyword}", method = RequestMethod.GET)
    public ResponseEntity findByKeyword(@PathVariable String keyword) {
        return ResponseEntity.ok(service.findByKeyword(keyword));
    }

    @RequestMapping(value = "/isbn/{isbn}", method = RequestMethod.GET)
    public ResponseEntity findByIsbn(@PathVariable String isbn) {
        return ResponseEntity.ok(service.findByIsbn(isbn));
    }

    @RequestMapping(value = "/genre/{genre}", method = RequestMethod.GET)
    public ResponseEntity findByGenre(@PathVariable Genre genre) {
        return ResponseEntity.ok(service.findByGenre(genre));
    }

    @RequestMapping(value = "/ebook/{ebook}", method = RequestMethod.GET)
    public ResponseEntity findByEbook(@PathVariable boolean ebook) {
        return ResponseEntity.ok(service.findByEbook(ebook));
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResponseEntity updateBook(@RequestBody Book book) {
        return ResponseEntity.ok(service.updateBook(book));
    }

    @GetMapping("/test")
    public String time() {
        final String timestamp = template.queryForObject("SELECT current_timestamp", String.class);
        return "Database clock is set to: " + timestamp;
    }
}
