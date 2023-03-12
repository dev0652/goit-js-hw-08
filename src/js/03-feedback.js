import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};

// Check if there is saved data in localStorage
const savedInput = localStorage.getItem('feedback-form-state');
const parsedSavedInput = JSON.parse(savedInput);

if (savedInput) {
  refs.input.value = parsedSavedInput.email;
  refs.textarea.value = parsedSavedInput.message;
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

  tempInput[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(tempInput));
}

// Submitting the form
refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.log('User submitted the following data:', parsedSavedInput);
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}