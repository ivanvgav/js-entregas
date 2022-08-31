//Funcion
//Idea: Calcular costo total de producto elegido por el usuario

alert("Buenas. Entro a este sitio a comprar productos tecnológicos. Por favor siga las instrucciones. Muchas gracias.")

function valorProducto(producto){
  let totalprovisorio;
  switch (producto) {
    case 0:
      console.log("Se añadió $0");
      totalprovisorio = 0;
      break;
    case 1:
      console.log("Se añadió $5000");
      totalprovisorio = 5000;
      break;
    case 2:
      console.log("Se añadió $10000");
      totalprovisorio = 10000;
      break;
    case 3:
      console.log("Se añadió $3500");
      totalprovisorio = 3500;
      break;
    case 4:
      console.log("Se añadió $1000");
      totalprovisorio = 1000;
      break;
    default:
      console.log("Se añadió $0");
      totalprovisorio = 0;
      break;
  }
  return totalprovisorio;
}

function sumarValores(valorprov,total){
   total = valorprov + total;
   console.log(total);
   return total;
}

const descuento = 0.1

function totalConDescuento(total) {
  let precioConDescuento = total - (total * descuento)
  return precioConDescuento
}

const total = 0;

for (let i = 0; i < 3; i++){
 let producto = Number(prompt(`Seleccione el producto que desea comprar: 1. Teclado: $5000
  2. Monitor: $10000,
  3. Gabinete de PC: $3500,
  4. Mouse Inalambrico: $1000
  0. Ninguno`));
 
  totalprovisorio = valorProducto(producto);
  console.log(totalprovisorio);
  total = sumarValores(totalprovisorio,total);
}
//Agregado de descuento
if (total > 5000) {
  console.log("Se le aplicará un descuento por su compra de un 10% sobre el total")
  totalConDescuento(total);
  precioConDescuento = totalConDescuento(total);
  console.log(`El total de compra es de ${precioConDescuento}`);
} else {
  console.log("Su compra no tiene descuento")
  console.log(`El total de compra es de ${total}`);
}