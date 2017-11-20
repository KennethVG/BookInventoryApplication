package be.vdab.bookinventoryapp.controller;

import be.vdab.bookinventoryapp.model.Book;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.http.*;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@ActiveProfiles("dev")
@Ignore
public class BookWebTest {

    // SERVER MOET DRAAIEN
    private static final String URL = "http://localhost:8080/books";

    private RestTemplate template;

    @Before
    public void init(){
        template = new RestTemplate();
    }

    @Test
    public void deleteBook(){
        String url = URL + "/16";
        //template.delete(url);
        ResponseEntity<Integer> responseEntity = template.exchange(url, HttpMethod.DELETE, null, Integer.class);
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isEqualTo(1);
    }

    @Test
    public void testAddBook(){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        String jsonBook = "{\"title\":\"New Book\",\"publisher\":\"Pub\",\"isbn\":\"14451\",\"author\":\"Betty\",\"numberOfPages\":140,\"ebook\":false,\"subject\":\"onderwerp\",\"language\":\"ENGLISH\",\"genre\":\"THRILLER\"}";

        HttpEntity<String> data = new HttpEntity<>(jsonBook, headers);

        ResponseEntity<Integer> responseEntity = template.postForEntity(URL, data, Integer.class);
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isEqualTo(1);
    }

    @Test
    public void testFindAllBooks() {
        ResponseEntity<List> responseEntity = template.getForEntity(URL, List.class);
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isNotEmpty();

        ResponseEntity<String> jsonArray = template.getForEntity(URL, String.class);
        try {
            List<Book> allBooks = new ArrayList<>();
            JSONArray array = new JSONArray(jsonArray.getBody());
            for (int i = 0; i < array.length(); i++) {
                JSONObject jsonBook = array.getJSONObject(i);
                Book javaBook = new Book();
                javaBook.setTitle(jsonBook.getString("title"));
                javaBook.setAuthor(jsonBook.getString("author"));
                javaBook.setId(jsonBook.getInt("id"));
                allBooks.add(javaBook);
            }

            assertThat(allBooks).isNotEmpty();

            Book myFirstBook = allBooks.get(0);
            assertThat(myFirstBook.getId()).isEqualTo(4);
            assertThat(myFirstBook.getAuthor()).isEqualTo("Kenneth");
            assertThat(myFirstBook.getTitle()).isEqualTo("titel");


        } catch (JSONException e) {
            e.printStackTrace();
        }

    }



}
