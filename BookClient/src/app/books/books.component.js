"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var books_service_1 = require("../books/books.service");
var book_1 = require("../books/book");
var BookComponent = (function () {
    function BookComponent(bookservice) {
        this.bookservice = bookservice;
        this.books = [];
    }
    BookComponent.prototype.addBook = function (book) {
    };
    BookComponent.prototype.findAllBooks = function () {
        var _this = this;
        console.log("In COMPONENT --> FindAll()");
        this.bookservice.findAllBooks().subscribe(function (result) {
            console.log("In COMPONENT --> result= " + result);
            for (var _i = 0, _a = _this.books; _i < _a.length; _i++) {
                var mybook = _a[_i];
                var makeBook = new book_1.Book({
                  title: mybook.title,
                  author: mybook.author,
                  isbn: mybook.isbn,
                  numberOfPages: mybook.numberOfPages
                });
                _this.books.push(makeBook);
            }
        });
        return this.books;
    };
    return BookComponent;
}());
BookComponent = __decorate([
    core_1.Component({
        selector: 'my-book',
        templateUrl: './books.component.html',
    }),
    __metadata("design:paramtypes", [books_service_1.BookService])
], BookComponent);
exports.BookComponent = BookComponent;
//# sourceMappingURL=books.component.js.map
