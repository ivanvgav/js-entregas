//Funcion
//Idea: Calcular costo total de producto elegido por el usuario

alert("Buenas. Entro a este sitio a comprar productos tecnológicos. Por favor siga las instrucciones. Muchas gracias.")

let producto1 = Number(prompt(`Seleccione el producto que desea comprar: 1. Teclado: $5000
2. Monitor: $10000,
3. Gabinete de PC: $3500,
4. Mouse Inalambrico: $1000
0. Ninguno`))

let producto2 = Number(prompt(`Seleccione el producto que desea comprar: 1. Teclado: $5000
2. Monitor: $10000,
3. Gabinete de PC: $3500,
4. Mouse Inalambrico: $1000
0. Ninguno`))

let producto3 = Number(prompt(`Seleccione el producto que desea comprar: 1. Teclado: $5000
2. Monitor: $10000,
3. Gabinete de PC: $3500,
4. Mouse Inalambrico: $1000
0. Ninguno`))

function sumaProducto(producto1, producto2, producto3){
  /*
  switch (producto1) {
    case 1:
      return 5000
      break;
    case 2:
      return 10000;
      break;
    case 3:
      return 3500;
      break;
    case 4:
      return 1000;
      break;
    default:
      return 0;
      break;
  }
  switch (producto2) {
    case 1:
      return 5000
      break;
    case 2:
      return 10000;
      break;
    case 3:
      return 3500;
      break;
    case 4:
      return 1000;
      break;
    default:
      return 0;
      break;
  }
  switch (producto3) {
    case 1:
      return 5000
      break;
    case 2:
      return 10000;
      break;
    case 3:
      return 3500;
      break;
    case 4:
      return 1000;
      break;
    default:
      return 0;
      break;
  }
  */
  return producto1 + producto2 + producto3
}

const descuento = 10

function totalConDescuento(sumaProducto, descuento) {
  return sumaProducto / descuento
}

sumaProducto();
console.log(`El sub total de compra es de ${sumaProducto}`)

if (sumaProducto >= 10000) {
  console.log("Se le aplicará un descuento por su compra de un 10% sobre el total")
  totalConDescuento();
  console.log(`El total de compra es de ${totalConDescuento}`);
} else {
  console.log("Su compra no tiene descuento")
  console.log(`El total de compra es de ${sumaProducto}`);
}
