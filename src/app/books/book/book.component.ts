import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../type/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  @Input() book: Book = {} as Book;

  isInCart: boolean = false;

  @Output() emitBook  = new EventEmitter<Book>(); 

  // myInterval: any =null;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  //  this.myInterval= setInterval(() => {
  //     console.log('hi');
  //   },1000)
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.myInterval);
  //     console.log('distroy');
  // }

  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book);
      //this.emitBook.emit(this.book);
  }

  removeFromCart(){
    this.isInCart =false;
    this.cartService.remove(this.book);
  }

}
