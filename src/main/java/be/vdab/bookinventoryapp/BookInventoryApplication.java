package be.vdab.bookinventoryapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jmx.JmxAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.EnableMBeanExport;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


//@EnableAspectJAutoProxy
//@EnableMBeanExport
@SpringBootApplication
public class BookInventoryApplication  {

//    extends SpringBootServletInitializer
    public static void main(String[] args) {
        SpringApplication.run(BookInventoryApplication.class, args);
    }

//    @Override
//    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
//        return builder.sources(BookInventoryApplication.class);
//    }

}
