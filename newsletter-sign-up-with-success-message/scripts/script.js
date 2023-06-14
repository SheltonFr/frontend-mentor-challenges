const form = document.querySelector("form");
const input = document.querySelector("form input");

form.onsubmit = (event) => {
  event.preventDefault();

  if (!input.value) {
    setFormInvalidState();
    return;
  }

  document.querySelector('.wrapper').classList.add('hidden')
  document.querySelector('.card').classList.remove('hidden')
};

input.onclick = (event) => {
    if(form.classList.contains('invalid')) {
        form.classList.remove('invalid');
    }
}

function setFormInvalidState() {
  form.classList.add("invalid");

  setTimeout(() => {
    form.classList.remove("invalid");
  }, 4500);
}
