package be.vdab.bookinventoryapp.service;

import be.vdab.bookinventoryapp.BookInventoryApplication;
import be.vdab.bookinventoryapp.model.Book;
import be.vdab.bookinventoryapp.service.BookService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = BookInventoryApplication.class)
public class BookServiceTest {

    @Autowired
    private BookService service;

    @Test
    public void testFindAll(){
        List<Book> books = service.findAll();
        assertThat(books).isNotNull();
    }
}
