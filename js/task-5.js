function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeBtn = document.querySelector('.js-change-color');
const colorValue = document.querySelector('.js-color');

changeBtn.addEventListener('click', handleColorChange)

function handleColorChange(e) {
  colorValue.textContent = body.style.backgroundColor = getRandomHexColor();
}