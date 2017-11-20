import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Book} from './book';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const URL = 'http://localhost:8080/books';
const UPDATE_URL = 'http://localhost:8080/books/update';
const SEARCH_URL = 'http://localhost:8080/books/keyword/';

@Injectable()
export class BookService {

  public selectedBook: Book;

  constructor(private http: Http) {
  }


  addBook(book: Book) {
    console.log('Service: addBook() methode');
    return this.http.post(URL, book);
  }

  findAllBooks() {
    console.log('Service: findAllBooks() methode');
    return this.http.get(URL).map(value => value.json());
  }

  searchBooks(keyword: string) {
    console.log('Service: searchBooks() methode');
    return this.http.get(SEARCH_URL + keyword + '/').map(value => value.json());
  }

  editBook(book: Book) {
    console.log('Service: editBook() methode');
    return this.http.post(UPDATE_URL, book);
  }

  deleteBook(id: number) {
    console.log('Service: deleteBook() methode');
    return this.http.delete(URL + '/' + id);
  }

  detailBook(book: Book) {
    console.log('Service: editBook() methode');
    this.selectedBook = book;
    return this.selectedBook;
  }
}
