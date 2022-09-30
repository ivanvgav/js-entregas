// Simulador de ecommerce
// Creación de objetos

class Product {
  constructor(id, name, price, quantity, img) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.img = img;
  }
}

// Pseudo Base de Datos
let baseDeDatos = [];
baseDeDatos.push(new Product(0, "Impresora", 9000, 10, "./img/printer.webp"));
baseDeDatos.push(new Product(1, "Mouse", 1000, 10, "./img/mouse.webp"));
baseDeDatos.push(new Product(2, "Teclado", 6000, 10, "./img/keyboard.webp"));
baseDeDatos.push(new Product(3, "Monitor", 19000, 10, "./img/monitor.webp"));
baseDeDatos.push(new Product(4, "Gabinete", 5000, 10, "./img/case.webp"));
baseDeDatos.push(new Product(5, "Cargador", 3000, 10, "./img/charger.webp"));

// DOM
let section = document.getElementById("section-products");
let temp = document.querySelector("template");
let card = temp.content.querySelector("div");
let carrito = [];
const DOMcarro = document.querySelector("#carrito");
const DOMemptyBtn = document.querySelector("#empty-button");
const DOMbuyBtn = document.querySelector("#buy");
const DOMtotal = document.querySelector("#total");
const DOMbotonVaciar = document.querySelector("#empty-button");

//Renderizar a partir de template
function render(array) {
  // section.innerHTML = "";

  array.forEach((product) => {
    let cardClonada = card.cloneNode(true);
    section.appendChild(cardClonada);
    cardClonada.children[0].innerText = product.name;
    cardClonada.children[1].src = product.img;
    cardClonada.children[2].innerText = product.price;
    cardClonada.children[3].innerText = product.quantity;
    cardClonada.children[4].addEventListener("click", () => {
      addProductToCarrito(product);
    });
  });
}

// Armado de carrito
function addProductToCarrito(evento) {
  // carrito.push(product);
  //nodo carrito
  carrito.push(evento.id);
  localStorage.setItem("Products", JSON.stringify(carrito));
  //actualizar carrito
  renderCarrito();
  Toastify({
    text: "Se agregó el producto al carrito",
    duration: 1000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      // background: "linear-gradient(to right, #00b09b, #96c93d)",
      background: "linear-gradient(220.55deg, #00B960 0%, #00552C 100%)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

function renderCarrito() {
  //empty html
  DOMcarro.textContent = "";
  //delete duplicates
  const carritoWithoutDuplicates = [...new Set(carrito)];
  //Nodes
  carritoWithoutDuplicates.forEach((item) => {
    //taking item needed from data base
    const myProduct = baseDeDatos.filter((product) => {
      //there is only one id?
      return product.id === parseInt(item);
    });
    // count item repeated
    const numberUnityItem = carrito.reduce((total, itemId) => {
      // if the id are equal, add counter, else do not mantain
      return itemId === item ? (total += 1) : total;
    }, 0);
    // carrito item nodes
    const myNode = document.createElement("li");
    myNode.classList.add("list-group-item", "text-right", "mx-2");
    myNode.textContent = `${numberUnityItem} x ${myProduct[0].name} - ${myProduct[0].price}`;
    // // carrito item nodes
    // Delete buttom
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "mx-5");
    deleteButton.textContent = "Vaciar";
    deleteButton.style.marginLeft = "1rem";
    deleteButton.dataset.item = item;
    deleteButton.addEventListener("click", deleteItemButton);
    //Mix nodes
    myNode.appendChild(deleteButton);
    DOMcarro.appendChild(myNode);
  });
  // render price amount in html
  DOMtotal.textContent = calculateTotal();
}

// Eventos
// event to delete carrito's item
function deleteItemButton(evento) {
  // get id
  const id = evento.target.dataset.item;
  //delete products
  carrito = carrito.filter((carritoId) => {
    return carritoId != id;
  });
  //Add notification
  Toastify({
    text: "Se ha eliminado el producto",
    duration: 1000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      // background: "linear-gradient(to right, #00b09b, #96c93d)",
      background: "linear-gradient(220.55deg, #FF896D 0%, #D02020 100%)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
  //render carrito
  renderCarrito();
}

// Total price with duplicate items
function calculateTotal() {
  return carrito
    .reduce((total, item) => {
      //from each item return price
      const myItem = baseDeDatos.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item);
      });
      return total + myItem[0].price;
    }, 0)
    .toFixed(2);
}

// Empty Carrito
function emptyCarrito() {
  //clear products storage
  carrito = [];
  //notification empty carrito
  Toastify({
    text: "Se ha vaciado el carrito",
    duration: 2000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(220.55deg, #FF896D 0%, #D02020 100%)",
      // background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
  //render again
  renderCarrito();
}

DOMemptyBtn.addEventListener("click", emptyCarrito);

//Initialice
render(baseDeDatos);
