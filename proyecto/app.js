// Simulador de ecommerce
// Creación de objetos

alert(
  "Buenas. Entró a este sitio a comprar productos tecnológicos. Por favor siga las instrucciones. Muchas gracias."
);

const products = [
  { id: 1, name: "Impresora", price: 9000 },
  { id: 2, name: "Mouse", price: 1000 },
  { id: 3, name: "Teclado", price: 4000 },
  { id: 4, name: "Monitor", price: 19000 },
  { id: 5, name: "Gabinete", price: 3000 },
  { id: 6, name: "Cargador", price: 3000 },
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

let carritosee = "7 Ver Carrito \n";
let carritoempty = "8 Vaciar Carrito \n";
let addproduct = "9 Añadir producto \n";
let exit = "99 para salir";
let carrito = [];
let carritoprice = 0;
let totalcarrito = carrito.reduce((acc, carrito) => {
  return acc + carrito.price;
}, 0);

let list = "";
let menu = "";

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Funciones

function emptyCarrito() {
  for (let i = 0; i <= carrito.length; i++) {
    carrito.pop();
  }
  alert("Se ha vaciado el carrito.");
}

// function fullCarrito() {
//   if (carritoprice > 20000) {
//     alert("Tu carrito se encuentra lleno");
//   }
// }

function showProducts() {
  menu = "Seleccione el número del producto que desea comprar: \n";
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
  option = prompt(menu + carritosee + carritoempty + addproduct + exit);
  if (option == 99) {
    close();
  } else if (option == 7) {
    showCarrito();
  } else if (option == 8) {
    emptyCarrito();
  } else if (option == 9) {
    addProduct();
  } else {
    addCarrito(option);
  }
}
let option;
while (option != 99) {
  showProducts();
}

function addCarrito(option) {
  carrito.unshift(products.slice(option - 1, option)[0]);
  totalcarrito = carrito.reduce((acc, carrito) => {
    return acc + carrito.price;
  }, 0);
  alert(
    `Se añadió el producto ${carrito[0].name} con el precio de $ ${carrito[0].price}. El total de la compra es de` +
      " " +
      totalcarrito
  );
  return carrito;
}

function close() {
  alert("Muchas gracias por su tiempo, vuelva pronto.");
  return false;
}

function showCarrito() {
  if (carrito == []) {
    alert("Tu carrito está vacío");
  } else {
    carrito.forEach((producto) => {
      alert(
        `Su carrito está compuesto por: \n ${
          producto.name
        } de ${producto.price.toString()}`
      );
    });
  }
}

function addProduct() {
  id = Number(
    prompt("Coloque el id del producto (Usar numeros de 10 para arriba)")
  );
  name = prompt("Coloque el nombre del producto");
  price = Number(prompt("Añada el precio del producto"));
  let z = new Product(id, name, price);
  products.push(z);
}

// Clases

// class user {
//   constructor(name, password) {
//     this.name = name;
//     this.password = password;
//   }
// }

// class service {
//   constructor(id, name, price, responsable, time) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.responsable = responsable;
//     this.time = time;
//   }
// }
