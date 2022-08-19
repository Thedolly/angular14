import { Injectable } from '@angular/core';

@Injectable(
  //providedIn: 'root'
)
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name:  'Clean Code',
  
        authore: 'Robert C Martin',
      
        image:  "https://images-na.ssl-images-amazon.com/images/I/51uO-K+V5dL._SX258_BO1,204,203,200_.jpg",
  
        amount: 700,
  
      },
      {
        name:  "Programatic Programmer",
  
        authore: "David Thomas",
  
        image:"https://images-eu.ssl-images-amazon.com/images/I/41DT4DZM2JL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  
        amount: 800,
      },
      {
        name:  'Clean Code',
  
        authore: 'Robert C Martin',
      
        image:  "https://images-na.ssl-images-amazon.com/images/I/51uO-K+V5dL._SX258_BO1,204,203,200_.jpg",
  
        amount: 900,
  
      },
      {
        name:  "Programatic Programmer",
  
        authore: "David Thomas",
  
        image:"https://images-eu.ssl-images-amazon.com/images/I/41DT4DZM2JL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  
        amount: 1000,
      }

    ];
  }
}
