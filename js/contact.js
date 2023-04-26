// Находим форму и кнопку отправки формы
const form = document.querySelector('#contact-form');
const submitButton = document.querySelector('#submit-button');

// Обработчик события отправки формы
const handleSubmit = (event) => {
  // Отменяем действие по умолчанию (отправку формы)
  event.preventDefault();

  // Проверяем обязательные поля на заполненность
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

  // Если какое-то обязательное поле не заполнено, показываем сообщение об ошибке
  if (!isFormValid) {
    alert('Please fill out all required fields!');
    return;
  }

  // Если все обязательные поля заполнены, отправляем форму
  form.submit();
};

// Добавляем обработчик события отправки формы
submitButton.addEventListener('click', handleSubmit);
