import {Component, OnInit} from '@angular/core';
import {Book} from './book';
import {Router} from '@angular/router';
import {BookComponent} from './books.component';
import {BookService} from "./books.service";

@Component({
  selector: 'app-detail-book',
  templateUrl: './books.detail.component.html',
})

export class BooksDetailComponent implements OnInit {

  detailBook: Book;

  constructor(private bookservice: BookService, private router: Router) {
  }

  ngOnInit(): void {
    this.detailBook = this.bookservice.selectedBook;
  }
}
