import {Component, OnInit} from '@angular/core';
import {Book} from './book';
import {Router} from '@angular/router';
import {BookService} from './books.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-book',
  templateUrl: './books.detail.component.html',
})

export class BooksDetailComponent implements OnInit {

  detailBook: Book;

  constructor(private bookservice: BookService, private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    this.detailBook = this.bookservice.selectedBook;
  }

  goBack() {
    this.location.back();
  }
}
