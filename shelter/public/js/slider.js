import Card from "./card.js";
import { shuffle } from "./scripts.js";

class Slider {
  constructor(Card) {
    this.Card = Card;
    this.indices = [...Array(8).keys()];
    this.slider = document.querySelector('[data-slider]');
    this.slide = this.slider.querySelector('[data-slider-list]');

    this.buttonPrev = this.slider.querySelector('[data-slider-previous]');
    this.buttonNext = this.slider.querySelector('[data-slider-next]');

    this.init();
  }

  init() {
    this.count = 3;
    const indices = this.indices;
    const currentIndices = shuffle(indices).slice(0, this.count);
    const nextIndices = indices.slice(this.count, 2 * this.count);
    this.push([...currentIndices]);

    this.buttonNext.addEventListener('click', () => this.getNewSlides(currentIndices, nextIndices));
    this.buttonPrev.addEventListener('click', () => this.getNewSlides(currentIndices,nextIndices));
  }

  getNewSlides(currentIndices, nextIndices) {
      
    // console.log(`выводим массив currentArray: ${currentArray}, nextIndices: ${nextIndices}`);
    this.buttonPrev.disabled = this.buttonNext.disabled = true;
    this.slide.classList.add('--move-right');
    this.popups.forEach(popup => {
      popup.remove();
    });
    this.push([...nextIndices]);
    // const currentArray = this.indices.filter(item => !nextIndices.includes(item));
    
    this.slide.addEventListener('animationend', () => {
      const slides = [...Array(this.count).keys()];
      
      slides.forEach(() => this.slide.removeChild(this.slide.children[0]));
      this.popups = document.querySelectorAll('[data-popup]');

      // this.push(shuffle(currentArray).slice(0, this.count));

      this.slide.classList.remove('--move-right');
      this.buttonPrev.disabled = this.buttonNext.disabled = false;
    }, { once: true });
  }

  push(array) {
    console.log(`выводим массив ${array}`);
    array.forEach((index) => new this.Card('[data-slider-list]', index));
  }

  moveSlides() {
  }
}

new Slider(Card);