import card from "./card.js";

const array = [...Array(8).keys()];;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i-=1) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array;
}

function fullArray(array) {
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

fullArray(array).map(index => card('[data-pagination]', index));