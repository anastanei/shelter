import card from "./card.js";


class Slider {
  constructor(card) {
   this.card = card;
   this.init();
  }
  init() {
    for (let k = 0; k < 1; k++) {
      card('[data-slider-list]', k);
    };
  }
}

new Slider(card);