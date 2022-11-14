import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Online könyváruház';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Pszichológiai', link: '/cat01'},
    {text: 'Scifi', link: '/cat02'},
    {text: 'Bűnügyi', link: '/cat03'},
  ];

  constructor() { }
}
