// Eventos

const formulario = document.querySelector("form");

const nameForm = document.querySelector("#formuNombre");
const mailForm = document.querySelector("#formuMail");

function checkForm(e) {
  e.preventDefault();
  let givenName = document.createElement("div");
  givenName.innerHTML = `<p><strong>Usuario Dado: ${nameForm.value}</p></strong>`;
  let givenMail = document.createElement("div");
  givenMail.innerHTML = `<p><em>Mail Dado: ${mail.value}</p></em>`;
  document.body.appendChild(givenName);
  document.body.appendChild(givenMail);
}

formulario.addEventListener("submit", checkForm);
