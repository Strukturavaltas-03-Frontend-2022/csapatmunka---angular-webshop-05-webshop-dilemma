import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private list: Product[] = [{
    id : 1,
    catId : 1,
    name : 'Termék1',
   description : 'Termék egy egy termék',
    image : '',
    price : 2000,
    stock : true,
   featured :true,
   active : true,
  },
  {
  id : 2,
    catId : 1,
    name : 'Termék2',
   description : 'Termék egy egy termék',
    image : '',
    price : 2000,
    stock : true,
   featured :true,
   active : true,
  },
{
  id : 3,
  catId : 1,
  name : 'Termék3',
 description : 'Termék egy egy termék',
  image : '',
  price : 2000,
  stock : true,
 featured :true,
 active : true,
},
{
  id : 2,
    catId : 1,
    name : 'Termék4',
   description : 'Termék egy egy termék',
    image : '',
    price : 2000,
    stock : true,
   featured :true,
   active : false,
  },
  {
    id : 2,
      catId : 1,
      name : 'Termék5',
     description : 'Termék egy egy termék',
      image : '',
      price : 2000,
      stock : true,
     featured :true,
     active : true,
    },]

getProducts(): Product[] {
  return this.list;
}

  constructor() { }
}
