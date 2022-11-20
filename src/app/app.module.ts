import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductTurnComponent } from './common/product-turn/product-turn.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { Cat03Component } from './page/cat03/cat03.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { ProductDetailComponent } from './common/product-detail/product-detail.component';
import { SliceTitlePipe } from './pipes/slice-title.pipe';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { AdminComponent } from './page/admin/admin.component';
import { TrueFalsePipe } from './pipes/true-false.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductCardComponent,
    ProductTurnComponent,
    ProductListComponent,
    FilterPipe,
    ShortenPipe,
    SortPipe,
    Cat03Component,
    CarouselComponent,
    ProductDetailComponent,
    SliceTitlePipe,
    DataEditorComponent,
    AdminComponent,
    TrueFalsePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
