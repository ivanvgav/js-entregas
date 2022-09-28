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
// class service {
//   constructor(id, name, price, responsable, time) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.responsable = responsable;
//     this.time = time;
//   }
// }

// DOM
let section = document.getElementById("section-products");
let temp = document.querySelector("template");
let card = temp.content.querySelector("div");
let carrito = [];
const DOMcarro = document.querySelector("#carrito");
const DOMemptyBtn = document.querySelector("#empty-button");
const DOMbuyBtn = document.querySelector("#buy");
const DOMtotal = document.querySelector("#total");

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
      carrito.push(product);
      renderCarrito();
    });
  });
}

// Armado de carrito
function addProductToCarrito(product) {
  carrito.push(product);
  //nodo carrito
  // carrito.push(evento.target.getAtribute("mark"));
  localStorage.setItem("Products", JSON.stringify(carrito));
  //actualizar carrito
  renderCarrito();
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
    console.log(myProduct);
    // count item repeated
    const numberUnityItem = carrito.reduce((total, itemId) => {
      // if the id are equal, add counter, else do not mantain
      return itemId === item ? total++ : total;
    }, 0);
    console.log(numberUnityItem);
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
function deleteItemButton() {
  // get id
  const id = evento.target.dataset.item;
  //delete products
  carrito = carrito.filter((carritoId) => {
    return carritoId !== id;
  });
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
  //render again
  renderCarrito;
}

// DOMemptyBtn.addEventListener("click", emptyCarrito);

//Initialice
render(baseDeDatos);
// renderCarrito();
