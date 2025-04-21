const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');

inputElem.addEventListener('input', getInputValue);

function getInputValue(e) {
  const trimedValue = e.target.value.trim();
  if (trimedValue !== '') {
    outputElem.textContent = trimedValue;
  } else {
    outputElem.textContent = "Anonymous";
  }
}

  