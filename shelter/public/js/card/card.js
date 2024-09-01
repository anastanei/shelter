import Popup from "./popup.js";
import generatePopup from "./generate-popup.js";
import petsData from "../pets.js";

export default function card(containerSelector, index) {
  const container = document.querySelector(containerSelector);
  const data = petsData;
  const item = data[index];
  const src = "./public/images/pets";

  const card = document.createElement('article');
  const cardSelector = 'data-card';
  card.className = 'section-pets-page__list-item card';
  card.setAttribute('aria-label', 'Learn more');
  card.setAttribute(cardSelector, '');

  const picture = document.createElement('picture');
  picture.className = 'card__picture';

  const sourceAvif = document.createElement('source');
  sourceAvif.srcset = `${src}/pets-${item.name}.avif`;
  sourceAvif.type = "image/avif";

  const sourceWebp = document.createElement('source');
  sourceWebp.srcset = `${src}/pets-${item.name}.webp`;
  sourceWebp.type = "image/webp";

  const img = document.createElement('img');
  img.className = 'img-in-picture';
  img.width = '270';
  img.height = '270';
  img.src = `${src}/500/pets-${item.name}.jpg`;
  img.alt = `${item.type}, ${item.breed}`;

    
  const span = document.createElement('span');
  span.className = 'card__title h4';
  span.textContent = item.name;

  const button = document.createElement('button');
  button.className = "button button--secondary card__button";
  button.type = "button";
  button.setAttribute("data-popup-open-button", "");
  button.textContent =  "Learn more";
  
  picture.appendChild(sourceAvif);
  picture.appendChild(sourceWebp);
  picture.appendChild(img);
  card.appendChild(picture);
  card.appendChild(span);
  card.appendChild(button);
  generatePopup(card, item);
  container.appendChild(card);
  new Popup(card);
}