import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BookService } from './books/books.service';

import { BookComponent } from './books/books.component';
import { AppComponent } from './app.component';
import {BookAddComponent} from './books/books.add.component';
import {BooksDetailComponent} from './books/books.detail.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpModule],
  declarations: [AppComponent, BookComponent, BookAddComponent, BooksDetailComponent],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
