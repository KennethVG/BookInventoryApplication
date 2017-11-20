import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './books/books.component';
import {BookAddComponent} from './books/books.add.component';
import {BooksDetailComponent} from "./books/books.detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books', component: BookComponent},
  {path: 'addbook', component: BookAddComponent},
  {path: 'detail', component: BooksDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
