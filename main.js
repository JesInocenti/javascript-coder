let nuevoUsuario = "";

const usuarios = ["Julieta", "Matías","Marcos", "Ignacio", "Paola"]

alert ("Bienvenido a ELOHIM postres y sandwiches, para comprar debes ser un usuario registrado.")

do {
    if ( nuevoUsuario != ""){
        alert("El nombre de usuario ya existe ingrese uno nuevo");
    }
    nuevoUsuario = prompt("Ingrese un nombre de usuario");
} while (usuarios.includes(nuevoUsuario) );

alert ("El nombre de usuario se creó correctamente");

const productos = [
    {
        "id":1,
        "nombre": "Sandwich de miga jamón y queso",
        "precio": 500,
        "cantidad": 1
    },
    {
        "id":2,
        "nombre": "Sandwich de miga jamón y queso triple con verdura",
        "precio": 600,
        "cantidad": 1
    },
    {
        "id":3,
        "nombre": "Chocolina 500 grs",
        "precio": 370,
        "cantidad": 1
    },
    {
        "id":4,
        "nombre": "Chocolina 750 grs",
        "precio": 550,
        "cantidad": 1
    },
    {
        "id":5,
        "nombre": "Tiramisú 500 grs",
        "precio": 370,
        "cantidad": 1
    },
    {
        "id":6,
        "nombre": "Tiramisú 750 grs",
        "precio": 550,
        "cantidad": 1
    },
    {
        "id":7,
        "nombre": "Turrón de quaker 500 grs",
        "precio": 370,
        "cantidad": 1
    },
    {
        "id":8,
        "nombre": "Turrón de quaker 750 grs",
        "precio": 550,
        "cantidad": 1
    },
    {
        "id":9,
        "nombre": "Borrachito 500 grs",
        "precio": 370,
        "cantidad": 1
    },
    {
        "id":10,
        "nombre": "Borrachito 750 grs",
        "precio": 550,
        "cantidad": 1
    },
    {
        "id":11,
        "nombre": "Trufas de quaker 12 unidades",
        "precio": 350,
        "cantidad": 1
    },
]
const carrito = []

let compra = prompt (`¿Desea realizar una compra? Ingresar si o no`);

if (compra == null){

    alert ("Por favor seleccione el producto que desea comprar");
}

if (compra == "si"){

    let eligeProductos = "";

    while (eligeProductos != "no"){

        eligeProductos = prompt (`

        Indique lo que desea comprar. Digite:

        Para dejar de comprar ingrese no

        1 para Sandwich de miga jamón y queso
        2 para Sandwich de miga jamón y queso triple con verdura
        3 para Chocolina 500 grs
        4 para Chocolina 750 grs
        5 para Tiramisú 500 grs
        6 para Tiramisú 750 grs
        7 para Turrón de quaker 500 grs
        8 para Turrón de quaker 750 grs
        9 para Borrachito 500 grs
        10 para Borrachito 750 grs
        11 para Trufas de quaker 750 grs

        `)
        if (eligeProductos == null){

            break;
        }
        if (eligeProductos == "no"){
            
            despedida();
            break;
        }
    }

}else{
    despedida();
}

function despedida() {
    alert("Gracias por visitarnos, lo esperamos pronto!");
}



