export default class Modal {
  constructor(modalSelector, buttonSelector, overlaySelector, buttonCloseSelector = false, linkSelector = false) {
      this.modal = document.querySelector(modalSelector);
      this.modalButton = document.querySelector(buttonSelector);
      this.overlay = this.modal.querySelector(overlaySelector);
      this.closeButton = buttonCloseSelector && this.modal ? this.modal.querySelector(buttonCloseSelector) : undefined;
      this.links = linkSelector && this.modal ? this.modal.querySelectorAll(linkSelector) : [];
      this.toggle = this.toggle.bind(this);
      this.init();
  }

  init() {
    const elements = [
      this.closeButton,
      this.overlay,
      this.modalButton,
      ...this.links
    ];
    elements.forEach(element => {
      if (element) {
        element.addEventListener('click', this.toggle);
      }
    });
  }

  toggle() {
    const isOpened = this.modal.classList.toggle('--visible');
    this.modalButton.classList.toggle('--opened', isOpened);
    this.toggleScrollLock(isOpened);
  }

  toggleScrollLock(isLocked) {
    document.body.classList.toggle('--scroll-locked', isLocked);
  }
}
