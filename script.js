////////////// Selecting Elements //////////////
const body = document.querySelector('body');
const colorBtn = document.querySelector('.colorBtn');

/////////////// Color generator ////////////////
const colorNumGenerator = function () {
  const randomNumber = Math.trunc(Math.random() * 255) + 1;
  return randomNumber;
};

////////////// Event Listener //////////////
colorBtn.addEventListener('click', function () {
  body.style.backgroundColor = `rgb(${colorNumGenerator()},${colorNumGenerator()},${colorNumGenerator()})`;
});
