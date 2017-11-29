webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n  cursor: pointer;\r\n}\r\n\r\na.active{\r\n  background-color: cornsilk;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"page-header\">\r\n    <h1>BoekApplicatie</h1>\r\n  </div>\r\n  <ul class=\"nav justify-content-end\">\r\n    <li class=\"nav-item\">\r\n      <a routerLink=\"/books\" routerLinkActive=\"active\" class=\"nav-link\">Alle boeken</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a routerLink=\"/addbook\" routerLinkActive=\"active\" class=\"nav-link\">Boek toevoegen</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<br> <br>\r\n<div class=\"container\">\r\n  <footer>\r\n        &copy; Van Gijsel Kenneth - Trainer@Oak3Academy\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__books_index__ = __webpack_require__("../../../../../src/app/books/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__books_index__["b" /* BookComponent */], __WEBPACK_IMPORTED_MODULE_5__books_index__["a" /* BookAddComponent */], __WEBPACK_IMPORTED_MODULE_5__books_index__["d" /* BooksDetailComponent */], __WEBPACK_IMPORTED_MODULE_5__books_index__["e" /* BooksEditComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__books_index__["c" /* BookService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_index__ = __webpack_require__("../../../../../src/app/books/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_2__books_index__["b" /* BookComponent */] },
    { path: 'addbook', component: __WEBPACK_IMPORTED_MODULE_2__books_index__["a" /* BookAddComponent */] },
    { path: 'detail', component: __WEBPACK_IMPORTED_MODULE_2__books_index__["d" /* BooksDetailComponent */] },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_2__books_index__["e" /* BooksEditComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/books/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book(title, author, id, publisher, genre, language, isbn, numberOfPages) {
        this.title = title;
        this.author = author;
        this.id = id;
        this.publisher = publisher;
        this.genre = genre;
        this.language = language;
        this.isbn = isbn;
        this.numberOfPages = numberOfPages;
    }
    return Book;
}());



/***/ }),

/***/ "../../../../../src/app/books/books.add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <br>\r\n\r\n  <form (ngSubmit)=\"onSubmit()\" #bookForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">* Titel:</label>\r\n      <em *ngIf=\"title.invalid && (title.dirty || title.touched)\">Required</em>\r\n      <input type=\"text\" class=\"form-control\" name=\"title\" id=\"title\"\r\n             placeholder=\"Bv: Dossier K\" [(ngModel)]=\"mybook.title\" #title=\"ngModel\" required=\"required\">\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"author\">* Auteur:</label>\r\n      <em *ngIf=\"author.invalid && (author.dirty || author.touched)\">Required</em>\r\n      <input type=\"text\" [(ngModel)]=\"mybook.author\" class=\"form-control\" name=\"author\" id=\"author\"\r\n             placeholder=\"Bv: Jef Geeraerts\" #author=\"ngModel\" required=\"required\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"author\">Uitgeverij:</label>\r\n      <input type=\"text\" [(ngModel)]=\"mybook.publisher\" class=\"form-control\" name=\"publisher\" id=\"publisher\"\r\n             placeholder=\"Bv: Van In\">\r\n    </div>\r\n\r\n    <div class=\" form-check\">\r\n      <label>Genre: </label> <br>\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"thriller\" id=\"thriller\" value=\"THRILLER\"\r\n               [(ngModel)]=\"mybook.genre\">\r\n        Thriller\r\n      </label>\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"comedy\" id=\"comedy\" value=\"COMEDY\"\r\n               [(ngModel)]=\"mybook.genre\">\r\n        Komedie\r\n      </label>\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"roman\" id=\"roman\" value=\"ROMAN\" [(ngModel)]=\"mybook.genre\">\r\n        Roman\r\n      </label>\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"comic\" id=\"comic\" value=\"COMIC\" [(ngModel)]=\"mybook.genre\">\r\n        Strip\r\n      </label>\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"nonfiction\" id=\"nonfiction\" value=\"NON-FICTION\"\r\n               [(ngModel)]=\"mybook.genre\">\r\n        Non-fictie\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"form-check\">\r\n      <label>Taal: </label> <br>\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"dutch\" id=\"dutch\" value=\"DUTCH\"\r\n               [(ngModel)]=\"mybook.language\">\r\n        Nederlands\r\n      </label>\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"english\" id=\"english\" value=\"ENGLISH\"\r\n               [(ngModel)]=\"mybook.language\">\r\n        Engels\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"pages\">Aantal pagina's:</label>\r\n      <input type=\"number\" [(ngModel)]=\"mybook.numberOfPages\" class=\"form-control\" name=\"pages\" id=\"pages\"\r\n             placeholder=\"Bv: 156\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"isbn\">ISBN:</label>\r\n      <input type=\"text\" [(ngModel)]=\"mybook.isbn\" class=\"form-control\" name=\"isbn\" id=\"isbn\" placeholder=\"isbn\">\r\n    </div>\r\n\r\n    <button type=\"submit\" [ngStyle]=\"bookForm.invalid?getButtonStyle():{}\" [disabled]=\"bookForm.invalid\" class=\"btn btn-primary\">Boek toevoegen</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/books/books.add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book__ = __webpack_require__("../../../../../src/app/books/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookAddComponent = (function () {
    function BookAddComponent(bookservice, router) {
        this.bookservice = bookservice;
        this.router = router;
        this.mybook = new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */]('', '', 0, '', 'THRILLER', 'DUTCH', '', 0);
    }
    BookAddComponent.prototype.onSubmit = function () {
        console.log('BookAddComponent: onSubmit() method');
        this.addBook(this.mybook);
        this.router.navigate(['books']);
    };
    BookAddComponent.prototype.addBook = function (book) {
        console.log('BookAddComponent: addBook() method');
        this.bookservice.addBook(book).subscribe();
    };
    BookAddComponent.prototype.getButtonStyle = function () {
        return {
            'cursor': 'not-allowed'
        };
    };
    BookAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-book',
            template: __webpack_require__("../../../../../src/app/books/books.add.component.html"),
            styles: ["\n    em {\n      float: right;\n      color: darkred;\n      padding-left: 10px;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], BookAddComponent);
    return BookAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/books/books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\r\n  margin: auto;\r\n  width: 50% !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <br>\r\n  <form (submit)=\"searchBooks()\" class=\"form-inline justify-content-end\">\r\n    <div class=\"form-row\">\r\n      <div class=\"col\">\r\n        <input  [(ngModel)]=\"keyword\" type=\"text\" name=\"search\" id=\"search\" class=\"form-control\" placeholder=\"zoekterm\" required>\r\n      </div>\r\n      <div class=\"col\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Zoeken</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <br>\r\n\r\n  <table class=\"table table-hover\">\r\n    <tbody>\r\n    <tr *ngFor=\"let mybook of books\">\r\n      <td (click)=\"detailBook(mybook)\" class=\"data-book\">{{mybook.id}}</td>\r\n      <td (click)=\"detailBook(mybook)\" class=\"data-book\">{{mybook.title}}</td>\r\n      <td (click)=\"detailBook(mybook)\" class=\"data-book\">{{mybook.author}}</td>\r\n      <td>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editBook(mybook)\">wijzig</button>&nbsp;&nbsp;\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteBook(mybook.id)\">verwijder</button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book__ = __webpack_require__("../../../../../src/app/books/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookComponent = (function () {
    function BookComponent(bookservice, router) {
        this.bookservice = bookservice;
        this.router = router;
        this.books = [];
    }
    BookComponent.prototype.ngOnInit = function () {
        this.findAllBooks();
    };
    BookComponent.prototype.findAllBooks = function () {
        var _this = this;
        console.log('BookComponent findAllBooks() methode');
        this.bookservice.findAllBooks().subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var b = data_1[_i];
                var aBook = new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */](b.title, b.author, b.id, b.publisher, b.genre, b.language, b.isbn, b.numberOfPages);
                _this.books.push(aBook);
            }
        });
        return this.books;
    };
    BookComponent.prototype.searchBooks = function () {
        var _this = this;
        console.log('BookComponent searchBooks() methode');
        this.bookservice.searchBooks(this.keyword).subscribe(function (data) {
            _this.books = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var b = data_2[_i];
                var aBook = new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */](b.title, b.author, b.id, b.publisher, b.genre, b.language, b.isbn, b.numberOfPages);
                _this.books.push(aBook);
            }
        });
        return this.books;
    };
    BookComponent.prototype.editBook = function (book) {
        console.log('BookComponent editBook() methode');
        this.bookservice.editBook(book);
        this.router.navigateByUrl('/edit');
    };
    BookComponent.prototype.deleteBook = function (id) {
        this.bookservice.deleteBook(id).subscribe();
        location.reload(false);
    };
    BookComponent.prototype.detailBook = function (book) {
        this.bookservice.detailBook(book);
        this.router.navigateByUrl('/detail');
    };
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book',
            template: __webpack_require__("../../../../../src/app/books/books.component.html"),
            styles: [__webpack_require__("../../../../../src/app/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/books/books.detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"card border-secondary mb-3\">\r\n    <div class=\"card-header\">\r\n       {{detailBook.author}}\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">{{detailBook.title}}</h4>\r\n      <blockquote class=\"blockquote mb-0\">\r\n        <!--Only show content that is not null-->\r\n        <p class=\"card-text\" [hidden]=\"!detailBook.publisher\">Uitgeverij: {{detailBook.publisher|lowercase}}</p>\r\n        <p class=\"card-text\" [hidden]=\"!detailBook.genre\">Genre: {{detailBook.genre|lowercase}}</p>\r\n        <p class=\"card-text\" [hidden]=\"!detailBook.language\">Taal: {{detailBook.language|lowercase}}</p>\r\n        <p class=\"card-text\" [hidden]=\"!detailBook.numberOfPages\">Aantal pagina's: {{detailBook.numberOfPages}}</p>\r\n        <footer class=\"blockquote-footer\" [hidden]=\"!detailBook.isbn\">isbn:<cite title=\"Source Title\">{{detailBook.isbn}}</cite></footer>\r\n      </blockquote>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">terug</button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/books/books.detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksDetailComponent = (function () {
    function BooksDetailComponent(bookservice, location) {
        this.bookservice = bookservice;
        this.location = location;
    }
    BooksDetailComponent.prototype.ngOnInit = function () {
        this.detailBook = this.bookservice.selectedBook;
    };
    BooksDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    BooksDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detail-book',
            template: __webpack_require__("../../../../../src/app/books/books.detail.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], BooksDetailComponent);
    return BooksDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/books/books.edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <br>\r\n\r\n  <form (ngSubmit)=\"onSubmit()\" #bookForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">* Titel:</label>\r\n      <em *ngIf=\"title.invalid && (title.dirty || title.touched)\">Required</em>\r\n      <input type=\"text\" [(ngModel)]=\"updateBook.title\" class=\"form-control\" name=\"title\" id=\"title\"\r\n             value=\"{{updateBook.title}}\" #title=\"ngModel\" required=\"required\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"author\">* Auteur:</label>\r\n      <em *ngIf=\"author.invalid && (author.dirty || author.touched)\">Required</em>\r\n      <input type=\"text\" [(ngModel)]=\"updateBook.author\" class=\"form-control\" name=\"author\" id=\"author\"\r\n             value=\"{{updateBook.author}}\" #author=\"ngModel\" required=\"required\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"author\">Uitgeverij:</label>\r\n      <input type=\"text\" [(ngModel)]=\"updateBook.publisher\" class=\"form-control\" name=\"publisher\" id=\"publisher\"\r\n             placeholder=\"Bv: Van In\">\r\n    </div>\r\n\r\n    <div class=\" form-check\">\r\n      <label>Genre: </label> <br>\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"thriller\" id=\"thriller\" value=\"THRILLER\"\r\n               [(ngModel)]=\"updateBook.genre\">\r\n        Thriller\r\n      </label>\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"comedy\" id=\"comedy\" value=\"COMEDY\"\r\n               [(ngModel)]=\"updateBook.genre\">\r\n        Komedie\r\n      </label>\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"roman\" id=\"roman\" value=\"ROMAN\"\r\n               [(ngModel)]=\"updateBook.genre\">\r\n        Roman\r\n      </label>\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"comic\" id=\"comic\" value=\"COMIC\"\r\n               [(ngModel)]=\"updateBook.genre\">\r\n        Strip\r\n      </label>\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"nonfiction\" id=\"nonfiction\" value=\"NON-FICTION\"\r\n               [(ngModel)]=\"updateBook.genre\">\r\n        Non-fictie\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"form-check\">\r\n      <label>Taal: </label> <br>\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"dutch\" id=\"dutch\" value=\"DUTCH\"\r\n               [(ngModel)]=\"updateBook.language\">\r\n        Nederlands\r\n      </label>\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"english\" id=\"english\" value=\"ENGLISH\"\r\n               [(ngModel)]=\"updateBook.language\">\r\n        Engels\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"pages\">Aantal pagina's:</label>\r\n      <input type=\"number\" [(ngModel)]=\"updateBook.numberOfPages\" class=\"form-control\" name=\"pages\" id=\"pages\"\r\n             placeholder=\"Bv: 156\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"isbn\">ISBN:</label>\r\n      <input type=\"text\" [(ngModel)]=\"updateBook.isbn\" class=\"form-control\" name=\"isbn\" id=\"isbn\" placeholder=\"isbn\">\r\n    </div>\r\n\r\n    <button type=\"submit\" [ngStyle]=\"bookForm.invalid?getButtonStyle():{}\" [disabled]=\"bookForm.invalid\"\r\n            class=\"btn btn-primary\">Update boek\r\n    </button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/books/books.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UPDATE_URL = 'https://guarded-escarpment-87523.herokuapp.com/books/update';
var BooksEditComponent = (function () {
    function BooksEditComponent(bookservice, route, http) {
        this.bookservice = bookservice;
        this.route = route;
        this.http = http;
    }
    BooksEditComponent.prototype.ngOnInit = function () {
        this.updateBook = this.bookservice.selectedBook;
    };
    BooksEditComponent.prototype.onSubmit = function () {
        console.log('EditComponent: onSubmit() methode');
        console.log(this.updateBook);
        this.http.post(UPDATE_URL, this.updateBook).map(function (data) { return data.json(); }).subscribe();
        this.route.navigate(['books']);
    };
    BooksEditComponent.prototype.getButtonStyle = function () {
        return {
            'cursor': 'not-allowed'
        };
    };
    BooksEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-book',
            template: __webpack_require__("../../../../../src/app/books/books.edit.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], BooksEditComponent);
    return BooksEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/books/books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// PRODUCTIE
// const URL = 'http://projecten.oak3.academy/BookApp/books';
// const UPDATE_URL = 'http://projecten.oak3.academy/BookApp/books/update';
// const SEARCH_URL = 'http://projecten.oak3.academy/BookApp/books/keyword/';
// DEVELOPMENT
// const URL = 'http://localhost:8085/books';
// const UPDATE_URL = 'http://localhost:8085/books/update';
// const SEARCH_URL = 'http://localhost:8085/books/keyword/';
// HEROKU
var URL = 'https://guarded-escarpment-87523.herokuapp.com/books';
var UPDATE_URL = 'https://guarded-escarpment-87523.herokuapp.com/books/update';
var SEARCH_URL = 'https://guarded-escarpment-87523.herokuapp.com/books/keyword/';
var BookService = (function () {
    function BookService(http) {
        this.http = http;
    }
    BookService.prototype.addBook = function (book) {
        console.log('Service: addBook() methode');
        return this.http.post(URL, book);
    };
    BookService.prototype.findAllBooks = function () {
        console.log('Service: findAllBooks() methode');
        return this.http.get(URL).map(function (value) { return value.json(); });
    };
    BookService.prototype.searchBooks = function (keyword) {
        if (keyword == null || keyword === '') {
            return this.findAllBooks();
        }
        console.log('Service: searchBooks() methode');
        return this.http.get(SEARCH_URL + keyword).map(function (value) { return value.json(); });
    };
    BookService.prototype.editBook = function (book) {
        // console.log('Service: editBook() methode');
        // return this.http.post(UPDATE_URL, book);
        console.log('Service: editBook() methode');
        this.selectedBook = book;
        return this.selectedBook;
    };
    BookService.prototype.deleteBook = function (id) {
        console.log('Service: deleteBook() methode');
        return this.http.delete(URL + '/' + id);
    };
    BookService.prototype.detailBook = function (book) {
        console.log('Service: detailBook() methode');
        this.selectedBook = book;
        return this.selectedBook;
    };
    BookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "../../../../../src/app/books/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__books_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_add_component__ = __webpack_require__("../../../../../src/app/books/books.add.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__books_add_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_component__ = __webpack_require__("../../../../../src/app/books/books.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__books_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__books_detail_component__ = __webpack_require__("../../../../../src/app/books/books.detail.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__books_detail_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__books_edit_component__ = __webpack_require__("../../../../../src/app/books/books.edit.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__books_edit_component__["a"]; });







/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map