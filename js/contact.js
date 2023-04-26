const form = document.querySelector('#contact-form');
const submitButton = document.querySelector('#submit-button');

const handleSubmit = (event) => {
  event.preventDefault();
  const requiredFields = form.querySelectorAll('[required]');
  let isFormValid = true;

  requiredFields.forEach(field => {
    if (!field.value) {
      field.classList.add('invalid');
      isFormValid = false;
    } else {
      field.classList.remove('invalid');
    }
  });

  if (!isFormValid) {
    alert('Please fill out all required fields!');
    return;
  }

  form.submit();
};

submitButton.addEventListener('click', handleSubmit);
