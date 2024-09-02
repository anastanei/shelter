const petsData = [
  {
    "name": "jennifer",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "sophia",
    "type": "dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "woody",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "scarlett",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "katrine",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "timmy",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "freddie",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "charly",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];

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
