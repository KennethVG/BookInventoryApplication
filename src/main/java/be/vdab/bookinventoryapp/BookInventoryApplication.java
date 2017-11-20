package be.vdab.bookinventoryapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class BookInventoryApplication {

    public static void main(String[] args) {

        SpringApplication.run(BookInventoryApplication.class, args);

    }

//    @Override
//    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
//        return builder.sources(BookInventoryApplication.class);
//    }

}
