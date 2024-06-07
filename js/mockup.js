function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function fillCounter(counter) {
  counter.textContent = randomIntFromInterval(1, 3);

  if (Number(counter.textContent) % 2 > 0) {
    counter.setAttribute('style', 'visibility: visible;');
  }
};
