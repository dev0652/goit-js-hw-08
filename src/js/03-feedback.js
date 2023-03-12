import throttle from 'lodash.throttle';

refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};

// Check if there is saved data in localStorage
const savedInput = localStorage.getItem('feedback-form-state');
const parsedSavedInout = JSON.parse(savedInput);

if (savedInput) {
  refs.input.value = parsedSavedInout.email;
  refs.textarea.value = parsedSavedInout.message;
}

// Create an empty object that will store form data
const tempInput = {
  email: '',
  message: '',
};

refs.form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  const name = event.target.name;
  const value = event.target.value;

  if (name === 'email') {
    tempInput.email = value;
  }

  if (name === 'message') {
    tempInput.message = value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(tempInput));
}

// Submitting the form
refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.log('User submitted the following data:', parsedSavedInout);
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}
