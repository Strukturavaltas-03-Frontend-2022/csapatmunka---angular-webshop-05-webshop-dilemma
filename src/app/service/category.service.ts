import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryList: Category[] =[
    {
      id: 1,
  name: 'Pszichológiai',
  description:'Könyvek azoknak akit érdekel a Pszichológia. '
    },
    {
      id: 2,
  name: 'Scifi',
  description:'Könyvek azoknak akit érdekel a scifi irodalom. '
    },
    {
      id: 3,
  name: 'Bűnügyi',
  description:'Könyvek azoknak akit érdekel a bűnügyek világa. '
    }
  ]

  constructor() { }
}
