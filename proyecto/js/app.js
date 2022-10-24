// Simulador de e-commerce

//TODO: Fecth
//Utilizar la API de fakestoreapi para poder generar todos los productos
let baseDeDatos = [];
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      let cardClonada = card.cloneNode(true);
      section.appendChild(cardClonada);
      cardClonada.children[0].innerText = product.title;
      cardClonada.children[1].src = product.image;
      cardClonada.children[2].innerText = product.price;
      cardClonada.children[3].innerText = product.rating.count;
      cardClonada.children[4].addEventListener("click", () => {
        addProductToCarrito(product);
      });
      baseDeDatos.push(product);
    });
  });


// DOM
let section = document.getElementById("section-products");
let temp = document.querySelector("template");
let card = temp.content.querySelector("div");
let carrito = [];
let toJson = [];
const DOMcarro = document.querySelector("#carrito");
const DOMemptyBtn = document.querySelector("#empty-button");
const DOMbuyBtn = document.querySelector("#buy");
const DOMtotal = document.querySelector("#total");
const DOMbotonVaciar = document.querySelector("#empty-button");
const DOMbotonComprar = document.querySelector("#buy-button");

// Armado de carrito
function addProductToCarrito(evento) {
  //nodo carrito
  carrito.push(evento.id);
  toJson.push(evento);
  localStorage.setItem("Products", JSON.stringify(toJson));
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
      background: "linear-gradient(220.55deg, #00B960 0%, #00552C 100%)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

// Render carrito
function renderCarrito() {
  DOMcarro.textContent = "";
  const carritoWithoutDuplicates = [...new Set(carrito)];
  carritoWithoutDuplicates.forEach((item) => {
    const myProduct = baseDeDatos.filter((product) => {
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
    myNode.textContent = `${numberUnityItem} x ${myProduct[0].title} - ${myProduct[0].price}`;
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
      background: "linear-gradient(220.55deg, #FF896D 0%, #D02020 100%)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
  //render carrito
  renderCarrito();
}

// Compra final
function buyItemButton() {
  //Call sweet alert with message
  Swal.fire({
    title: "¿Quieres finalizar la compra?",
    text: "Confirma para finalizar la compra",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "¡Felicidades!",
        "Tu compra ha sido registrada.",
        "Pronto llegará a tu domicilio."
      );
      emptyAfterBuy();
    }
  });
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
    },
    onClick: function () {}, // Callback after click
  }).showToast();
  //render again
  renderCarrito();
}

function emptyAfterBuy(){
  //reset carrito
  carrito = [];
  //render again
  renderCarrito();
}

DOMemptyBtn.addEventListener("click", emptyCarrito);
DOMbotonComprar.addEventListener("click", buyItemButton);
