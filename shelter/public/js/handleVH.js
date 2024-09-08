let lastHeight = window.innerHeight;

function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

const handleResize = debounce(() => {
  const currentHeight = window.innerHeight;
  if (currentHeight !== lastHeight) {
    lastHeight = currentHeight;
    setVH();
  }
}, 200);

export default function handleVH() {
  setVH();
  window.addEventListener('resize', handleResize);
}