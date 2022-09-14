// Simulador de ecommerce
// Creación de objetos

alert(
  "Buenas. Entró a este sitio a comprar productos tecnológicos. Por favor siga las instrucciones. Muchas gracias."
);

const products = [
  { id: 1, name: "Impresora", price: 9000, stock: true, quantity: 10 },
  { id: 2, name: "Mouse", price: 1000, stock: true, quantity: 10 },
  { id: 3, name: "Teclado", price: 4000, stock: true, quantity: 10 },
  { id: 4, name: "Monitor", price: 19000, stock: true, quantity: 10 },
  { id: 5, name: "Gabinete", price: 3000, stock: true, quantity: 10 },
  { id: 6, name: "Cargador", price: 3000, stock: true, quantity: 10 },
];

// const services = [
//   {
//     id: 90,
//     name: "Limpieza de equipo",
//     price: 5000,
//     responsable: "Mario",
//     time: 2,
//   },
//   {
//     id: 91,
//     name: "Reformateo de PC",
//     price: 3000,
//     responsable: "Laura",
//     time: 2,
//   },
//   {
//     id: 92,
//     name: "Armado de servidor",
//     price: 25000,
//     responsable: "Rubén",
//     time: 5,
//   },
//   {
//     id: 93,
//     name: "Colocación de pasta",
//     price: 2000,
//     responsable: "Mario",
//     time: 2,
//   },
//   { id: 94, name: "Armado de PC", price: 10000, responsable: "Laura", time: 2 },
// ];

let carrito = [];
let carritoPrice = 0;

let list = "";
let menu = "";

// Funciones

function emptyCarrito() {
  return carrito;
}

function fullCarrito() {
  if (carritoPrice > 20000) {
    return "Tu carrito se encuentra lleno";
  }
}

function showProducts() {
  menu = "Seleccione el producto que desea comprar: \n";
  for (const product of products) {
    menu +=
      product.id.toString() +
      " " +
      product.name +
      " " +
      "$" +
      product.price.toString() +
      "\n";
  }
  prompt(menu);
}
showProducts();

function addCarrito() {}

// function makeList1(obj) {
//   idstring = obj.id.toString();
//   pricestring = obj.price.toString();
//   list += idstring + " " + obj.name + " " + pricestring + "\n";
//   return list;
// }

// let searchCarritoProduct = carrito.find((product) => product.price === "Product Name")
// Como joroca tengo que hacer para mandar una opción a esto

// Clases

class user {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

class product {
  constructor(id, name, price, stock, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.quantity = quantity;
  }
}

class service {
  constructor(id, name, price, responsable, time) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.responsable = responsable;
    this.time = time;
  }
}
