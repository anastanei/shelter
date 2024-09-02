import petsData from "./pets-data.js";

export default function card(containerSelector, index) {
  const container = document.querySelector(containerSelector);
  const data = petsData;
  const item = data[index];
  const src = "./public/images/pets";

  const card = document.createElement("article");
  const cardSelector = "data-card";
  card.className = "section-pets-page__list-item card";
  card.setAttribute("aria-label", "Learn more");
  card.setAttribute(cardSelector, "");

  card.innerHTML = `
    <picture class="card__picture">
      <source srcset="${src}/pets-${item.name}.avif" type="image/avif">
      <source srcset="${src}/pets-${item.name}.webp" type="image/webp">
      <img class="img-in-picture" width="270" height="270" src="${src}/500/pets-${item.name}.jpg" alt="${item.type}, ${item.breed}">
    </picture>
    <span class="card__title h4">${item.name}</span>
  `;

  const button = document.createElement("button");
  button.className = "button button--secondary card__button";
  button.type = "button";
  button.setAttribute("data-popup-open-button", "");
  button.textContent = "Learn more";

  card.appendChild(button);

  generatePopup(card, item);
  container.appendChild(card);
  new Popup(card);
}


export function generatePopup(container, item) {
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
      <img class="img-in-picture" src="./public/images/pets/500/pets-${item.name}.jpg" alt="${item.breed}" width="350" height="350" data-popup-img="">
    </picture>
    <div class="popup__content">
      <h3 class="h2 popup__name" data-popup-name="">${item.name}</h3>
      <p class="h4 popup__race">
        <span data-popup-type>${item.type}</span> - <span data-popup-breed>${item.breed}</span>
      </p>
      <p class="popup__text h5" data-popup-description="">${item.description}</p>
      <ul class="popup__feature-list">
        <li class="popup__feature-item h5">
          <span class="popup__feature-name">Age: </span><span class="popup__feature-value" data-popup-age>${item.age}</span>
        </li>
        <li class="popup__feature-item h5">
          <span class="popup__feature-name">Inoculations: </span><span class="popup__feature-value" data-popup-inoculations>${item.inoculations.join(', ')}</span>
        </li>
        <li class="popup__feature-item h5">
          <span class="popup__feature-name">Diseases: </span><span class="popup__feature-value" data-popup-diseases>${item.diseases.join(', ')}</span>
        </li>
        <li class="popup__feature-item h5">
          <span class="popup__feature-name">Parasites: </span><span class="popup__feature-value" data-popup-parasites>${item.parasites.join(', ')}</span>
        </li>
      </ul>
    </div>
  `;

  containerDiv.insertBefore(closeButton, containerDiv.firstChild);
  popup.appendChild(overlay);
  popup.appendChild(containerDiv);

  container.appendChild(popup);
}

export class Popup {
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
