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
    this.currentIndices = shuffle(indices).slice(0, this.count);
    this.rightIndices = undefined;
    this.leftIndices = undefined;
    this.push([...this.currentIndices]);

    this.buttonNext.addEventListener('click', () => {
      const [newLeftIndices, newCurrentIndices] = this.moveSlides(this.currentIndices, true);
      this.currentIndices = newCurrentIndices;
      this.leftIndices = newLeftIndices;
    });

    this.buttonPrev.addEventListener('click', () => {
      const [newRightIndices, newCurrentIndices] = this.moveSlides(this.currentIndices, false);
      this.currentIndices = newCurrentIndices;
      this.rightIndices = newRightIndices;
    });
  }

  moveSlides(currentIndices, isForward) {

    const getNewIndices = () => {
      const availableIndices = this.indices.filter(item => !currentIndices.includes(item));
      const shuffledIndices = shuffle(availableIndices);
      return shuffledIndices.slice(0, this.count);
    };

    const nextIndices = (isForward)
      ? this.rightIndices || getNewIndices()
      : this.leftIndices || getNewIndices();

    this.animateSlide(isForward);
    this.disableButtons(true);
    this.toogleSlideClasses(isForward, 'on');
    this.removePopups();

    if (isForward) {
      this.push([...nextIndices]);
    } else {
      this.unshift([...nextIndices]);
    }

    return [currentIndices, nextIndices];
  }

  animateSlide(isForward) {
    this.slide.addEventListener('animationend', () => {

      const slides = [...Array(this.count).keys()];

      slides.forEach(() => {
        const index = isForward ? 0 : this.slide.children.length - 1;
        this.slide.removeChild(this.slide.children[index]);
      });

      this.toogleSlideClasses(isForward);
      this.disableButtons(false);
    
    }, { once: true });
  }

  removePopups() {
    this.popups = document.querySelectorAll('[data-popup]');
    this.popups.forEach(popup => {
      popup.remove();
    });
  }

  disableButtons(isDisabled) {
    this.buttonPrev.disabled = this.buttonNext.disabled = isDisabled;
  }

  toogleSlideClasses(isForward, isActive = 'off') {
    if (isActive === 'on') {     
      this.slide.classList.add(isForward ? '--move-right' : '--move-left');
    } else {
      this.slide.classList.remove('--move-right', '--move-left')
    };
  }

  push(array) {
    console.log(`выводим массив ${array}`);
    array.forEach((index) => new this.Card('[data-slider-list]', index));
  }

  unshift(array) {
    console.log(`выводим массив ${array}`);
    array.forEach((index) => new this.Card('[data-slider-list]', index, 'start'));
  }
}

new Slider(Card);