// Login para el e-commerce
// TODO: Falta el html y el CSS
//Class Login
class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateOnSubmit();
  }
}

// Class Auth
class Auth {
  constructor() {
    document.querySelector("body").style.display = "none";
    const auth = localStorage.setItem("auth");
    this.validateAuth(auth);
  }
  //Validation
  validateAuth(auth) {
    if (auth != 1) {
      window.location.replace("/");
    } else {
      document.querySelector("body").style.display = "block";
    }
  }
  //To logout
  logOut() {
    localStorage.removeItem("auth");
    localStorage.removeItem("/");
  }
}

// Validate on Submit Function
const validateOnSubmit = () => {
  let self = this;
  this.form.addEventListener("submit", (e) => {
    e.preventDefault();
    let error = 0;
    self.fields.forEach((field) => {
      const input = document.querySelector(`#${field}`);
      if (self.validateFields(input) == false) {
        error++;
      }
    });
    if (error == 0) {
      localStorage.setItem("Auth", 1);
      this.form.submit();
    }
  });
};

// Validate Fields function
//

const validateFields = (field) => {
  if (field.value.trim() === "") {
    this.setStatus(
      field,
      `${field.previousElementSibling.innerText} no puede ser vacío`,
      "error"
    );
    return false;
  } else {
    if (field.type == "password") {
      if (field.value.lenght < 8) {
        this.setStatus(
          field,
          `${field.previousElementSibling.innerText} tiene que ser de 8 caracteres`,
          "error"
        );
        return false;
      } else {
        this.setStatus(field, null, "success");
        return true;
      }
    } else {
      this.setStatus(field, null, "success");
      return true;
    }
  }
};

//Call login form
//
const form = document.querySelector(".loginForm");

if (form) {
  const fields = ["username", "password"];
  const validator = new Login(form, fields);
}

//In order to logout
const auth = new Auth();

document.querySelector(".logout").addEventListener("click", (e) => {
  auth.logOut();
});
