import {Component, OnInit} from '@angular/core';
import {BookService} from './books.service';
import {Book} from './book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BookComponent implements OnInit {


  books: Book[] = [];
  keyword: string;
  bookToUpdate: Book;


  constructor(private bookservice: BookService, private router: Router) {
  }

  ngOnInit(): void {
    this.findAllBooks();
  }

  findAllBooks(): Book[] {
    console.log('BookComponent findAllBooks() methode');
    this.bookservice.findAllBooks().subscribe(data => {
      for (const b of data) {
        const aBook = new Book(b.title, b.author, b.id);
        this.books.push(aBook);
      }
    });
    return this.books;
  }

  searchBooks(): Book[] {
    console.log('BookComponent searchBooks() methode');
    this.books = [];
    this.bookservice.searchBooks(this.keyword).subscribe(data => {
      for (const b of data) {
        const aBook = new Book(b.title, b.author, b.id);
        this.books.push(aBook);
      }
    });
    return this.books;
  }

  editBook(book: Book) {
    this.bookToUpdate = book;
  }

  deleteBook(id: number) {
    this.bookservice.deleteBook(id).subscribe();
    location.reload(false);
  }

  detailBook(book: Book) {
    this.bookservice.detailBook(book);
    this.router.navigateByUrl('/detail');
  }
}
