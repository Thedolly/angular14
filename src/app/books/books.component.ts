import { Component, OnInit } from '@angular/core';
import { Book } from '../type/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book []= [];
    // {
    //   name:  'Clean Code',

    //   authore: 'Robert C Martin',
    
    //   image:  "https://images-na.ssl-images-amazon.com/images/I/51uO-K+V5dL._SX258_BO1,204,203,200_.jpg",

    //   amount: 700,

    // },
    // {
    //   name:  "Programatic Programmer",

    //   authore: "David Thomas",

    //   image:"https://images-eu.ssl-images-amazon.com/images/I/41DT4DZM2JL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",

    //   amount: 800,
    // },
    // {
    //   name:  'Clean Code',

    //   authore: 'Robert C Martin',
    
    //   image:  "https://images-na.ssl-images-amazon.com/images/I/51uO-K+V5dL._SX258_BO1,204,203,200_.jpg",

    //   amount: 900,

    // },
    // {
    //   name:  "Programatic Programmer",

    //   authore: "David Thomas",

    //   image:"https://images-eu.ssl-images-amazon.com/images/I/41DT4DZM2JL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",

    //   amount: 1000,
    // }
  // ];

  

  card:  Book[] = [];

  // name: string = 'Clean Code';

  // authore: string = 'Robert C Martin';

  // src: string = "https://images-na.ssl-images-amazon.com/images/I/51uO-K+V5dL._SX258_BO1,204,203,200_.jpg";

  // name2: string = "Programatic Programmer";

  // authore2: string = "David Thomas";

  // src2: string = "https://images-eu.ssl-images-amazon.com/images/I/41DT4DZM2JL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg";

  // isDisabled: boolean = false;

  isShowing: boolean = true;

  constructor(private booksService: BooksService ) {
   // console.log('Constructor: on in it');
   }

  ngOnInit(): void {
 this.books = this.booksService.getBooks();
    //  console.log('OnInit: on in it');
  }

  // addToCart(book: Book){
  //   console.log(book);
  // }

  // handleClick(){
  //   this.isDisabled = true;
  // }
  // myName: string ='';
  // handleInput(event: any){
  //  this.myName = event.target.value;
  // }
  // toggleBooks(){
  //   this.isShowing = !this.isShowing;
  // }

}
