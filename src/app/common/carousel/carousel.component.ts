import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { debounceTime, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @Input() books: any[] = [];

  private maxPage = 0;
  private currPage = 0;
  private screen = {
    mobile: {
      buttonWidth: 10,
      cardsContainerWidth: 80,
      cardsWidth: 100,
      cardNum: 1,
      cardGap: 0,
      pageOffset: 100,
    },
    tablet: {
      buttonWidth: 5,
      cardsContainerWidth: 86,
      cardsWidth: 90,
      cardNum: 2,
      cardGap: 10,
      pageOffset: 110,
    },
    desktop: {
      buttonWidth: 4,
      cardsContainerWidth: 88,
      cardsWidth: 84,
      cardNum: 5,
      cardGap: 4,
      pageOffset: 104,
    },
  };
  private screenSize: 'mobile' | 'tablet' | 'desktop'  = 'desktop';
  private pageOffset = 0;
  private cardsWidth = 0;
  private buttonWidthVarName = '--carousel-button-width:';
  private buttonWidth = 0;
  private cardsContainerWidthVarName = '--carousel-cards-container-width:';
  private cardsContainerWidth = 0;
  private cardsWidthVarName = '--carousel-cards-width:';
  private cardNum = 0;
  private cardNumVarName = '--carousel-card-num:';
  private cardGap = 0;
  private cardGapVarName = '--carousel-card-gap:';
  private offset = 0;
  private offsetVarName = '--carousel-offset:';


  constructor() {
    this.screenSize = this.getScreenSize();
    this.init(this.screenSize);
  }

  ngOnInit(): void {
    for (let i = 1; i < 24; i++) {
      this.books.push({ id: i });
    }
    this.maxPage = Math.ceil(this.books.length / this.cardNum) - 1;

    fromEvent(window, 'resize').pipe(
      debounceTime(100),
      tap(() => {
        const currScreenSize = this.getScreenSize();
        if(currScreenSize !== this.screenSize) {
          this.screenSize = currScreenSize;
          this.init(currScreenSize);
          const carouselEl = this.getCarouselEl();
          carouselEl.style.cssText = this.getCssText();
        }
      }),
    ).subscribe();
  }

  ngAfterViewInit() {
    const carouselEl = document.querySelector('.carousel');
    (carouselEl as HTMLElement).style.cssText = this.getCssText();
  }

  pager(next?: boolean) {
    if (next && (this.currPage !== this.maxPage)) {
      this.currPage++;
      this.turnPage(next);
    } else if (!next && this.currPage) {
      this.currPage--;
      this.turnPage(next);
    };
  }

  turnPage(next?: boolean) {
    let pageOffset = this.pageOffset;
    const lastPageCards = this.books.length % this.cardNum;
    if (lastPageCards > 0 && ((next && this.currPage === this.maxPage) || (!next && this.currPage === this.maxPage - 1))) {
      pageOffset = (pageOffset / this.cardNum) * (this.books.length % this.cardNum);
    }
    const carouselEl = this.getCarouselEl();
    const carouselCssVars = carouselEl.style.cssText.split(';');
    let carouselOffset = carouselCssVars[5].replace('--carousel-offset:', '');
    carouselOffset = carouselOffset.replace('%', '');
    this.offset = Number(carouselOffset) + Number(`${next ? '-' : ''}1`) * pageOffset;
    carouselEl.style.cssText = this.getCssText();
  }

  private getCarouselEl() {
    const carouselEl = document.querySelector('.carousel');

    return (carouselEl as HTMLElement);
  }

  private getCssText() {
    const buttonWidth = `${this.buttonWidthVarName}${this.buttonWidth}%;`;
    const cardsContainerWidth = `${this.cardsContainerWidthVarName}${this.cardsContainerWidth}%;`;;
    const cardWidth = `${this.cardsWidthVarName}${this.cardsWidth}%;`;
    const cardNum = `${this.cardNumVarName}${this.cardNum};`;
    const cardGap = `${this.cardGapVarName}${this.cardGap}%;`;
    const offset = `${this.offsetVarName}${this.offset}%;`;

    return `${buttonWidth}${cardsContainerWidth}${cardWidth}${cardNum}${cardGap}${offset}`;
  }

  private getScreenSize() {
    const screenSize = window.innerWidth;

    return screenSize < 576 ? 'mobile' : screenSize < 992 ? 'tablet' : 'desktop';
  }

  private init(screenSize: 'mobile' | 'tablet' | 'desktop') {
    this.buttonWidth = this.screen[screenSize].buttonWidth;
    this.cardsContainerWidth = this.screen[screenSize].cardsContainerWidth;
    this.cardsWidth = this.screen[screenSize].cardsWidth;
    this.cardNum = this.screen[screenSize].cardNum;
    this.cardGap = this.screen[screenSize].cardGap;
    this.pageOffset = this.screen[screenSize].pageOffset;
  }
}
