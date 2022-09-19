// DOM
// Mensaje de bienvenida mediante array
// Favor de actualizar hasta que salgan los distintos mensaje, pueden
// repetirse

let welcomes = [
  "Bienvenido a la prueba",
  "Welcome to the test dear tutor",
  "Bojour pedazos de soquetes",
];

for (welcome of welcomes) {
  const randomWelcome = Math.floor(Math.random() * welcomes.length);
  let container2 = document.createElement("div");
  container2.innerHTML = `<h3>${welcomes[randomWelcome]}</h3>`;
  document.body.appendChild(container2);
}

// Elementos a partir de los objetos
let products = [
  { id: 1, name: "Impresora", price: 9000 },
  { id: 2, name: "Mouse", price: 1000 },
  { id: 3, name: "Teclado", price: 4000 },
  { id: 4, name: "Monitor", price: 19000 },
  { id: 5, name: "Gabinete", price: 3000 },
  { id: 6, name: "Cargador", price: 3000 },
];

for (product of products) {
  let container = document.createElement("div");
  container.innerHTML = `<h2>Producto: ${product.name}</h2>
  <p><em>Precio:</em> ${product.price}</p>`;
  document.body.appendChild(container);
}
