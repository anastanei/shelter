export default class Popup {
  constructor(cardElement, item) {
    this.cardElement = cardElement;
    this.item = item;
    this.popup = null;
    this.init();
  }

  init() {
    this.generatePopup();
    this.buttons = Array.from(this.cardElement.querySelectorAll('[data-popup-open-button]'));
    this.overlay = this.popup.querySelector('[data-popup-overlay]');
    this.closeButton = this.popup.querySelector('[data-popup-close-button]');
    this.toggle = this.toggle.bind(this);
    
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

  generatePopup() {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.setAttribute('data-popup', '');

    const overlay = document.createElement('div');
    overlay.className = 'popup__overlay overlay';
    overlay.setAttribute('data-popup-overlay', '');

    const containerDiv = document.createElement('div');
    containerDiv.className = 'popup__container';

    const closeButton = document.createElement('button');
    closeButton.className = 'popup__button arrow-button';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'close info');
    closeButton.setAttribute('data-popup-close-button', '');

    const spanIcon = document.createElement('span');
    spanIcon.className = 'cross-icon';
    closeButton.appendChild(spanIcon);

    containerDiv.innerHTML = `
      <picture class="popup__picture" data-popup-picture="">
        <img class="img-in-picture" src="./public/images/pets/500/pets-${this.item.name}.jpg" alt="${this.item.breed}" width="350" height="350" data-popup-img="">
      </picture>
      <div class="popup__content">
        <h3 class="h2 popup__name" data-popup-name="">${this.item.name}</h3>
        <p class="h4 popup__race">
          <span data-popup-type>${this.item.type}</span> - <span data-popup-breed>${this.item.breed}</span>
        </p>
        <p class="popup__text h5" data-popup-description="">${this.item.description}</p>
        <ul class="popup__feature-list">
          <li class="popup__feature-item h5">
            <span class="popup__feature-name">Age: </span><span class="popup__feature-value" data-popup-age>${this.item.age}</span>
          </li>
          <li class="popup__feature-item h5">
            <span class="popup__feature-name">Inoculations: </span><span class="popup__feature-value" data-popup-inoculations>${this.item.inoculations.join(', ')}</span>
          </li>
          <li class="popup__feature-item h5">
            <span class="popup__feature-name">Diseases: </span><span class="popup__feature-value" data-popup-diseases>${this.item.diseases.join(', ')}</span>
          </li>
          <li class="popup__feature-item h5">
            <span class="popup__feature-name">Parasites: </span><span class="popup__feature-value" data-popup-parasites>${this.item.parasites.join(', ')}</span>
          </li>
        </ul>
      </div>
    `;

    containerDiv.insertBefore(closeButton, containerDiv.firstChild);
    popup.appendChild(overlay);
    popup.appendChild(containerDiv);

    document.body.appendChild(popup);
    this.popup = popup;
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