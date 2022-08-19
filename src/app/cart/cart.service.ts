import { Injectable } from '@angular/core';
import { Book } from '../type/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<Book>= [];

  constructor() { }

  add(book: Book){
    console.log(book);
    this.cart.push(book);
  }
  remove(book: Book){
    console.log(book);
    this.cart = this.cart.filter((b) => b != book);
  }
  get(){
    return this.cart;
  }

}
