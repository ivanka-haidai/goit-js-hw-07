const form = document.querySelector('.login-form');

form.addEventListener('submit', handleFormSubmit);
  const data = {};
function handleFormSubmit(e) {
  e.preventDefault();
  const emailValue = e.target.elements.email.value.trim();
  const passwordValue = e.target.elements.password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
  } else {
    data.email = emailValue;
    data.password = passwordValue;
    console.log(data);
  }

  e.target.reset();
}
