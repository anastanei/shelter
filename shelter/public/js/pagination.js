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

fullArray().map(index => card('[data-pagination]', index));