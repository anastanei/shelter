export default class Menu {
  constructor(menuSelector, buttonSelector, overlaySelector, linkSelector) {
    this.menu = document.querySelector(menuSelector);
    this.button = document.querySelector(buttonSelector);
    this.overlay = this.menu.querySelector(overlaySelector);
    this.links = this.menu.querySelectorAll(linkSelector);
    this.toggle = this.toggle.bind(this);
    this.init();
  }

  init() {
    const elements = [
      this.button,
      this.overlay,
      ...this.links,
    ];

    elements.forEach(element => {
      if (element) {
        element.addEventListener('click', this.toggle);
      }
    });
  }

  toggle() {
    const isOpened = this.menu.classList.toggle('--visible');
    this.button.classList.toggle('--opened', isOpened);
    this.toggleScrollLock(isOpened);
  }

  toggleScrollLock(isLocked) {
    document.body.classList.toggle('--scroll-locked', isLocked);
  }
}