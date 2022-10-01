let postre = "";
let precio = 0;
let cantidad = 0;
let precioSinIva = 0;
let cantidadTotal = 0;
let seguirComprando = false;
let confirmarCompra = false;
let precioFinal = 0;
let precioContado = 0;
let confirmarPago = false;
let nuevoUsuario = "";

const iva = x => x * 0.21
const suma = (a, b) => a + b
const resta = (a, b) => a - b
const descuento = x => x * 0.15
const nombres = ["Julieta", "Matías","Marcos", "Ignacio", "Paola"]

alert ("Bienvenido a Elohim, para comprar debes ser un usuario registrado.")

do {
    if ( nuevoUsuario != ""){
        alert("El nombre de usuario ya existe ingrese uno nuevo");
    }
    nuevoUsuario = prompt("Ingrese un nombre de usuario");
} while (nombres.includes(nuevoUsuario) );

alert ("El nombre de usuario se creó correctamente");

do {
    postre = prompt
    (`

    Indique lo que desea comprar. Digite:

    Para dejar de comprar ingrese no

    1 para Chocolina 500 grs
    2 para Chocolina 750 grs
    3 para Tiramisú 500 grs
    4 para Tiramisú 750 grs
    5 para Turrón de quaker 500 grs
    6 para Turrón de quaker 750 grs
    7 para Borrachito 500 grs
    8 para Borrachito 750 grs
    9 para Trufas de quaker 750 grs

 `)
   cantidad = parseInt(prompt("¿Cuántos desea comprar?"));

    switch (postre) {
        case "1":
            precio = 500;  
            break; 
        case "2":
            precio = 750;
            break;
        case "3":
            precio = 500;
            break;
        case "4":
            precio = 750;
            break;   
        case "5":
            precio = 500;
            break;
        case "6":
            precio = 750;
            break;
        case "7":
            precio = 500;
            break;
        case "8":
            precio = 750;
            break;
        case "9":
            precio = 800;
            break;
        default:
            alert ("El postre seleccionado no se encuentra disponible")
            precio = 0;
            cantidad = 0;
            break;
    }
    precioSinIva += precio * cantidad;
    precioFinal = suma(precioSinIva, iva(precioSinIva));
    precioContado = resta(precioFinal, descuento (precioFinal));
    cantidadTotal += cantidad;
    
    seguirComprando = confirm("¿Desea comprar otro postre? Presione aceptar para agregar otro postre y cancelar para avanzar con su compra.");

} while (seguirComprando);

confirmarCompra = confirm ("¿Desea confirmar su compra de $ "+precioFinal+"?");
confirmarPago = confirm ("Pagando de contado tiene un 15 % de descuento. ¿Desea pagar de contado "+precioContado+"? Presione aceptar para pagar de contado o cancelar para pagar con crédito");

if (confirmarPago){
    confirmación();   
} else{ 
    confirmarPago = confirm ("¿Confirma pago con tarjeta de crédito "+precioFinal+"?")
    confirmación(); 
} 

function confirmación() {
    alert("Pago recibido. El producto se entregará en el plazo de 1 hora, gracias por su compra!");
}

