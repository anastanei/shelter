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

    this.mobileCount = 1;
    this.tabletCount = 2;
    this.desktopCount = 3;


    this.mediaMobile = window.matchMedia('(max-width: 639px)');
    this.mediaTablet = window.matchMedia('(min-width: 640px) and (max-width: 1140px)');
    this.mediaDesktop = window.matchMedia('(min-width: 1140px)');

    this.count = this.getCount();

    this.init();
  }

  init() {
    this.getLayout();
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
    this.handleMediaQueries();
  }

  getCount() {
    if (this.mediaMobile.matches) return this.mobileCount;
    if (this.mediaTablet.matches) return this.tabletCount;
    if (this.mediaDesktop.matches) return this.desktopCount;
  };

  getLayout() {
    const indices = this.indices;
    this.currentIndices = shuffle(indices).slice(0, this.count);
    this.rightIndices = undefined;
    this.leftIndices = undefined;
    this.addCards([...this.currentIndices], true);
  }

  handleMediaQueries() {
    this.mediaMobile.addEventListener('change', (event) => this.updateAmount(event, this.mobileCount));
    this.mediaTablet.addEventListener('change', (event) => this.updateAmount(event, this.tabletCount));
    this.mediaDesktop.addEventListener('change', (event) => this.updateAmount(event, this.desktopCount));
  }

  updateAmount(event, count) {
    if (event.matches) {
      this.removePopups();
      this.slide.innerHTML = '';
      this.count = count;
      this.getLayout();
    }
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

    this.addCards(nextIndices, isForward);

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

  addCards(array, isForward) {
    if (isForward) {
      console.log(`выводим массив ${array}`);
      array.forEach((index) => new this.Card('[data-slider-list]', index));
    } else {
      console.log(`выводим массив ${array}`);
      array.forEach((index) => new this.Card('[data-slider-list]', index, 'start'));
    }
  }
}

new Slider(Card);