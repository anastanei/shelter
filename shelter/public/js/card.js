import Popup from "./popup.js";

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

export default class Card {
  constructor(containerSelector, index, position = 'end') {
    this.container = document.querySelector(containerSelector);
    this.index = index;
    this.data = petsData[index];
    this.src = "./public/images/pets";
    this.position = position;

    this.init();
  }
  
  init() {
    const cardItem = this.getCard();  
    if (this.position === 'start') {
      this.container.prepend(cardItem);
    } else {
      this.container.appendChild(cardItem);
    }
  }

  getCard() {
    const cardItem = document.createElement("li");
    cardItem.className = `card-item ${this.index}`;
    cardItem.setAttribute("data-card", "");

    const card = document.createElement("article");
    card.className = "card";
    card.setAttribute("aria-label", "Learn more");

    card.innerHTML = `
      <picture class="card__picture">
        <source srcset="${this.src}/pets-${this.data.name}.avif" type="image/avif">
        <source srcset="${this.src}/pets-${this.data.name}.webp" type="image/webp">
        <img class="img-in-picture" width="270" height="270" src="${this.src}/500/pets-${this.data.name}.jpg" alt="${this.data.type}, ${this.data.breed}">
      </picture>
      <span class="card__title h4">${this.data.name}</span>

    `;

    const button = document.createElement("button");
    button.className = "button button--secondary card__button";
    button.type = "button";
    button.setAttribute("data-popup-open-button", "");
    button.textContent = "Learn more";

    card.appendChild(button);

    cardItem.appendChild(card);

    new Popup(card, this.data);

    return cardItem;
  }
}