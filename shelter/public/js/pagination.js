import card from "./card.js";
import { shuffle } from "./scripts.js";
class Pagination {
  constructor(card, shuffle) {
    this.shuffle = shuffle;
    this.card = card;

    this.array = this.getArray();
    this.length = this.array.length;
    this.count;
    this.countMobile = 3;
    this.countTablet = 6;
    this.countDesktop = 8;
    this.pagesAmount;
    this.startPage = 1;
    this.currentPage = this.startPage;

    this.mediaMobile = window.matchMedia('(max-width: 639px)');
    this.mediaTablet = window.matchMedia('(min-width: 640px) and (max-width: 1023px)');
    this.mediaDesktop = window.matchMedia('(min-width: 1024px)');

    this.paginationSelector = '[data-pagination]';

    this.list = document.querySelector(this.paginationSelector);
    this.nav = document.querySelector('[data-pagination-nav]');
    this.buttonFirst = this.nav.querySelector('[data-pagination-first]');
    this.buttonPrev = this.nav.querySelector('[data-pagination-prev]');
    this.showCurrent = this.nav.querySelector('[data-pagination-current]');
    this.buttonNext = this.nav.querySelector('[data-pagination-next]');
    this.buttonLast = this.nav.querySelector('[data-pagination-last]');

    this.init();
  }


  init () {
    if (this.mediaMobile.matches) {
      this.count = this.countMobile;
    } else if (this.mediaTablet.matches) {
      this.count = this.countTablet;
    } else if (this.mediaDesktop.matches) {
      this.count = this.countDesktop;
    }

    this.showPage(this.currentPage);

    this.mediaMobile.addEventListener('change', (event) => this.getLayout(event, this.countMobile));
    this.mediaTablet.addEventListener('change', (event) => this.getLayout(event, this.countTablet));
    this.mediaDesktop.addEventListener('change', (event) => this.getLayout(event, this.countDesktop));

    this.buttonFirst.addEventListener('click', () => this.showPage(this.startPage));
    this.buttonPrev.addEventListener('click', () => this.showPage(this.currentPage -= 1));
    this.buttonNext.addEventListener('click', () => this.showPage(this.currentPage += 1));
    this.buttonLast.addEventListener('click', () => this.showPage(this.currentPage = this.pagesAmount));
  }

  // controlMaxPage

  getPagesAmount () {
    return this.length / this.count;
  }
  
  getArray () {
    const array = [...Array(8).keys()];;
    const res = [];

    const getIndexes = (srcLength, resLength) => shuffle([...Array(srcLength).keys()]).slice(0, resLength);
    const shuffleAndPush = (arr) => res.push(...shuffle(arr));

    shuffleAndPush(array);

    const indexes = getIndexes(6, 4);
    indexes.forEach(index => res.push(array[index]));

    const chunk = indexes.sort((a, b) => b - a)
                        .map(index => array
                        .splice(index, 1)[0]);

    shuffleAndPush(array);
    shuffleAndPush(chunk);
    shuffleAndPush(array);
    return [...res, ...res];
  }

  getLayout(event, n) {
    if (event.matches) {
      this.count = n;
      this.pagesAmount = this.getPagesAmount();
      this.showPage(this.currentPage <= this.pagesAmount ? this.currentPage : this.pagesAmount);
    }
  }

  showPage(page) {
    this.list.innerHTML = '';
    this.pagesAmount = this.getPagesAmount();
    this.startIndex = (page - 1) * this.count;
    this.chunk = this.array.slice(this.startIndex, this.startIndex + this.count);
    this.chunk.map(index => card(this.paginationSelector, index));
    this.refreshNav(page);
  }

  refreshNav(page) {
    this.showCurrent.innerHTML = page;
    this.buttonFirst.disabled = this.buttonPrev.disabled = (page == this.startPage);
    this.buttonLast.disabled = this.buttonNext.disabled = (page == this.pagesAmount);
  }
}

new Pagination(card, shuffle);