//Funcion
//Idea: Calcular costo total de producto elegido por el usuario

alert("Buenas. Entro a este sitio a comprar productos tecnológicos. Por favor siga las instrucciones. Muchas gracias.")

function sumaProducto(producto){
  switch (producto) {
    case 0:
      console.log("Se añadió $0")
      return 0
      break;
    case 1:
      console.log("Se añadió $5000")
      return 5000
      break;
    case 2:
      console.log("Se añadió $10000")
      return 10000;
      break;
    case 3:
      console.log("Se añadió $3500")
      return 3500;
      break;
    case 4:
      console.log("Se añadió $1000")
      return 1000;
      break;
    default:
      console.log("Se añadió $0")
      return 0;
      break;
  }
}


for (let i = 0; i < 3; i++){
  let producto = Number(prompt(`Seleccione el producto que desea comprar: 1. Teclado: $5000
  2. Monitor: $10000,
  3. Gabinete de PC: $3500,
  4. Mouse Inalambrico: $1000
  0. Ninguno`))
  sumaProducto(producto);
}

/*
function sumar(){
  console.log(`El precio total es de $ ${precioFinal}`)
}

const descuento = 0.1

function totalConDescuento() {
  return precioFinal - (precioFinal * descuento)
}

if (precioFinal >= 3000) {
  console.log("Se le aplicará un descuento por su compra de un 10% sobre el total")
  totalConDescuento();
  console.log(`El total de compra es de ${totalConDescuento}`);
} else {
  console.log("Su compra no tiene descuento")
  console.log(`El total de compra es de ${precioFinal}`);
}

/*
sumaProducto();
sumaProducto();
sumaProducto();

let precioFinal = producto + producto + producto
*/