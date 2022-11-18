import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

export interface ITableColumn {
  title: string;
  key: any;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  appName: string = 'Online könyváruház';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Pszichológiai', link: '/cat01' },
    { text: 'Scifi', link: '/cat02' },
    { text: 'Bűnügyi', link: '/cat03' },
    { text: 'Admin', link: '/admin' },
  ];

  dataTableColumns: ITableColumn[] = [
    { title: 'ID', key: 'id' },
    { title: 'KatID', key: 'catId' },
    { title: 'Cím', key: 'name' },
    { title: 'Szerző', key: 'author' },
    { title: 'Leírás', key: 'description' },
    { title: 'Kép', key: 'image' },
    { title: 'Ár', key: 'price' },
    { title: 'Készlet', key: 'stock' },
    { title: 'Kiemelt', key: 'featured' },
    { title: 'Aktív', key: 'active' },
    { title: 'Akciós', key: 'discounted' },
  ];

  constructor() {}
}
