document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = e.target.name.value;
  const emailValue = e.target.email.value;
  const subjectValue = e.target.value;

  if (nameValue || emailValue || subjectValue) {
  } 
    document.querySelector(".submit-success").style.display = "flex";
    document.querySelector(".modal1__popup-desk").style.display = "none";

    e.target.reset();
});