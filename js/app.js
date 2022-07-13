// HTML element selection
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const btnSubmit = document.querySelector("#enviar");
const spinner = document.querySelector("#spinner");

// Events
email.addEventListener("keyup", getData);
asunto.addEventListener("keyup", getData);
mensaje.addEventListener("keyup", getData);
btnSubmit.addEventListener("click", sendData);

const data = {
  email: "",
  asunto: "",
  mensaje: "",
};

//Get data from HTML
function getData(e) {
  if (e.target.id == "email") {
    data.email = e.target.value;
    validationEmail();
  }

  if (e.target.id == "asunto") {
    console.log("validation asunto");
    data.asunto = e.target.value;
    validationAsunto();
  }

  if (e.target.id == "mensaje") {
    data.mensaje = e.target.value;
    validationMensaje();
  }

  // Cuando los campos del formulario esta completo se remueve la clase de opacidad y de no permitido
  activeBtnSubmit();
}

function sendData(e) {
  e.preventDefault();
  if (validationEmail() && validationAsunto() && validationMensaje()) {
    spinner.style.display = "flex";
    setTimeout(() => {
      spinner.style.display = "none";
    }, 1500);

    return console.log("Enviar formulario");
  }
}

function validationMensaje() {
  if (mensaje.value) {
    mensaje.classList.remove("border-red-500");
    mensaje.classList.add("border-green-500");
    return true;
  } else {
    mensaje.classList.remove("border-green-500");
    mensaje.classList.add("border-red-500");
    return false;
  }
}

function validationAsunto() {
  if (asunto.value) {
    asunto.classList.remove("border-red-500");
    asunto.classList.add("border-green-500");
    return true;
  } else {
    asunto.classList.remove("border-green-500");
    asunto.classList.add("border-red-500");
    return false;
  }
}

function validationEmail() {
  const er = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (er.test(email.value)) {
    email.classList.remove("border-red-500");
    email.classList.add("border-green-500");
    return true;
  } else {
    email.classList.remove("border-green-500");
    email.classList.add("border-red-500");
    return false;
  }
}

function activeBtnSubmit() {
  if (email.value && asunto.value && mensaje.value) {
    btnSubmit.classList.remove("cursor-not-allowed", "opacity-50");
  } else {
    btnSubmit.classList.add("cursor-not-allowed", "opacity-50");
  }
}
