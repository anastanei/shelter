export default class Popup {
  constructor(cardElement) {
    this.cardElement = cardElement;
    this.popup = this.cardElement.querySelector('[data-popup]');
    this.buttons = Array.from(this.cardElement.querySelectorAll('[data-popup-open-button]'));
    this.overlay = this.popup.querySelector('[data-popup-overlay]');
    this.closeButton = this.popup.querySelector('[data-popup-close-button]');
    this.toggle = this.toggle.bind(this);
    this.init();
  }

  init() {
    const elements = [
      this.closeButton,
      this.overlay,
      ...this.buttons,
    ];

    elements.forEach(element => {
      if (element) {
        element.addEventListener('click', this.toggle);
      }
    });
  }

  toggle() {
    const isOpened = this.popup.classList.toggle('--visible');
    this.buttons.forEach(button => button.classList.toggle('--opened', isOpened));
    this.toggleScrollLock(isOpened);
  }

  toggleScrollLock(isLocked) {
    document.body.classList.toggle('--scroll-locked', isLocked);
  }
}