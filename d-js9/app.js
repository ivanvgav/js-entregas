// Eventos

const formulario = document.querySelector("form");

const passForm = document.querySelector("#formuPass");
const mailForm = document.querySelector("#formuMail");

function checkForm(e) {
  e.preventDefault();
  let givenPass = document.createElement("div");
  givenPass.innerHTML = `<p><strong>Constraseña Dada: ${passForm.value}</p></strong><p>Solo de prueba</p>`;
  let givenMail = document.createElement("div");
  givenMail.innerHTML = `<p><em>Mail Dado: ${mailForm.value}</em></p>`;
  document.body.appendChild(givenMail);
  document.body.appendChild(givenPass);
}

formulario.addEventListener("submit", checkForm);
