import card from "./card.js";
import { shuffle } from "./scripts.js";

function fullArray() {
  const array = [...Array(8).keys()];;
  const res = [];

  const getIndexes = (srcLength, resLength) => shuffle([...Array(srcLength).keys()]).slice(0, resLength);
  const shuffleAndPush = (arr) => res.push(...shuffle(arr));

  shuffleAndPush(array);

  const indexes = getIndexes(6, 4);
  indexes.forEach(index => res.push(array[index]));

  const chunk = indexes.sort((a, b) => b - a)
                       .map(index => array
                       .splice(index, 1)[0]);

  shuffleAndPush(array);
  shuffleAndPush(chunk);
  shuffleAndPush(array);
  return [...res, ...res];
}

function pagination() {
  const array = fullArray();
  const length = array.length;
  let count;
  let pagesAmount;
  const mediaMobile = window.matchMedia('(max-width: 639px)');
  const mediaTablet = window.matchMedia('(min-width: 640px) and (max-width: 1023px)');
  const mediaDesktop = window.matchMedia('(min-width: 1024px)');
  const startPage = 1;
  let currentPage = startPage;

  const paginationSelector = '[data-pagination]';
  const list = document.querySelector(paginationSelector);
  const nav = document.querySelector('[data-pagination-nav]');
  const buttonFirst = nav.querySelector('[data-pagination-first]');
  const buttonPrev = nav.querySelector('[data-pagination-prev]');
  const showCurrent = nav.querySelector('[data-pagination-current]');
  const buttonNext = nav.querySelector('[data-pagination-next]');
  const buttonLast = nav.querySelector('[data-pagination-last]');

  if (mediaMobile.matches) {
    count = 3;
    showPage(currentPage);
  }

  if (mediaTablet.matches) {
    count = 6;
    showPage(currentPage);
  }

  if (mediaDesktop.matches) {
    count = 8;
    showPage(currentPage);
  }

  function showPage(page) {
  list.innerHTML = '';
  showCurrent.innerHTML = page;
  pagesAmount = length/count;
  const startIndex = (page - 1) * count;
  const chunk = array.slice(startIndex, startIndex + count);
  chunk.map(index => card(paginationSelector, index));
  buttonFirst.disabled = buttonPrev.disabled = (page == startPage);
  buttonLast.disabled = buttonNext.disabled = (page == pagesAmount);
  }

  buttonFirst.addEventListener('click', () => showPage(startPage));
  buttonPrev.addEventListener('click', () => showPage(currentPage -= 1));
  buttonNext.addEventListener('click', () => showPage(currentPage += 1));
  buttonLast.addEventListener('click', () => showPage(currentPage = pagesAmount));

  function getLayout(event, n) {
    if (event.matches) {
      count = n;
      showPage(currentPage);
      pagesAmount = length/count;
    }
  };

  mediaMobile.addEventListener('change', (event) => getLayout(event, 3));
  mediaTablet.addEventListener('change', (event) => getLayout(event, 6));
  mediaDesktop.addEventListener('change', (event) => getLayout(event, 8));
};

pagination();