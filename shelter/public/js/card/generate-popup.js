export default function generatePopup(container, item) {
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

  const picture = document.createElement('picture');
  picture.className = 'popup__picture';
  picture.setAttribute('data-popup-picture', '');

  const img = document.createElement('img');
  img.className = 'img-in-picture';
  img.src = `./public/images/pets/500/pets-${item.name}.jpg`;
  img.alt = item.breed;
  img.width = '350';
  img.height = '350';
  img.setAttribute('data-popup-img', '');
  picture.appendChild(img);

  const content = document.createElement('div');
  content.className = 'popup__content';

  const name = document.createElement('h3');
  name.className = 'h2 popup__name';
  name.setAttribute('data-popup-name', '');
  name.textContent = item.name;

  const race = document.createElement('p');
  race.className = 'h4 popup__race';
  race.innerHTML = `<span data-popup-type>${item.type}</span> - <span data-popup-breed>${item.breed}</span>`;

  const description = document.createElement('p');
  description.className = 'popup__text h5';
  description.setAttribute('data-popup-description', '');
  description.textContent = item.description;

  const featureList = document.createElement('ul');
  featureList.className = 'popup__feature-list';

  const ageItem = document.createElement('li');
  ageItem.className = 'popup__feature-item h5';
  ageItem.innerHTML = `<span class="popup__feature-name">Age: </span><span class="popup__feature-value" data-popup-age>${item.age}</span>`;

  const inoculationsItem = document.createElement('li');
  inoculationsItem.className = 'popup__feature-item h5';
  inoculationsItem.innerHTML = `<span class="popup__feature-name">Inoculations: </span><span class="popup__feature-value" data-popup-inoculations>${item.inoculations.join(', ')}</span>`;

  const diseasesItem = document.createElement('li');
  diseasesItem.className = 'popup__feature-item h5';
  diseasesItem.innerHTML = `<span class="popup__feature-name">Diseases: </span><span class="popup__feature-value" data-popup-diseases>${item.diseases.join(', ')}</span>`;

  const parasitesItem = document.createElement('li');
  parasitesItem.className = 'popup__feature-item h5';
  parasitesItem.innerHTML = `<span class="popup__feature-name">Parasites: </span><span class="popup__feature-value" data-popup-parasites>${item.parasites.join(', ')}</span>`;

  featureList.appendChild(ageItem);
  featureList.appendChild(inoculationsItem);
  featureList.appendChild(diseasesItem);
  featureList.appendChild(parasitesItem);

  content.appendChild(name);
  content.appendChild(race);
  content.appendChild(description);
  content.appendChild(featureList);

  containerDiv.appendChild(closeButton);
  containerDiv.appendChild(picture);
  containerDiv.appendChild(content);

  popup.appendChild(overlay);
  popup.appendChild(containerDiv);

  container.appendChild(popup);
}