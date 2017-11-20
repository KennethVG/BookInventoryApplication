import {Component} from '@angular/core';
import {BookService} from './books.service';
import {Book} from './book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './books.add.component.html',
})

export class BookAddComponent {

  mybook: Book = new Book('', '', 0, '', 'THRILLER', 'DUTCH', '', 0);

  constructor(private bookservice: BookService, private router: Router) {
  }

  onSubmit() {
    console.log('BookAddComponent: onSubmit() method');
    this.addBook(this.mybook);
    this.router.navigateByUrl('/books');
    location.reload(false);
  }

  addBook(book: Book) {
    console.log('BookAddComponent: addBook() method');
    this.bookservice.addBook(book).subscribe();
  }
}
