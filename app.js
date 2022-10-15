const BBDD = [
    {
        "id": 1,
        "nombre":  "Chocolina",
        "tipo": "postre",
        "desc": "500 grs",
        "precio": 750,
        "imagen": "/public/images/chocotorta.jpg",
        "cantidad":1
    },

    {
        "id": 2,
        "nombre": "Chocolina",
        "tipo": "postre",
        "desc": "750 grs",
        "precio": 1000,
        "imagen": "/public/images/chocotorta.jpg",
        "cantidad":1
    },

    {
        "id": 3,
        "nombre": "Tiramisú",
        "tipo": "postre",
        "desc": "500 grs",
        "precio": 800,
        "imagen": "/public/images/tiramisu.jpg",
        "cantidad":1
    },

    {
        "id": 4,
        "nombre": "Tiramisú",
        "tipo": "postre",
        "desc": "750 grs",
        "precio": 1050,
        "imagen": "/public/images/tiramisu.jpg",
        "cantidad":1
    },

    {
        "id": 5,
        "nombre": "Borrachito",
        "tipo": "postre",
        "desc": "500 grs",
        "precio": 700,
        "imagen": "/public/images/borracho.jpg",
        "cantidad":1
    },

    {
        "id": 6,
        "nombre": "Borrachito",
        "tipo": "postre",
        "desc": "750 grs",
        "precio": 950,
        "imagen": "/public/images/borracho.jpg",
        "cantidad":1
    },
    {
        "id": 7,
        "nombre": "Turrón de quacker",
        "tipo": "postre",
        "desc": "500 grs",
        "precio": 700,
        "imagen": "/public/images/tq.jpg",
        "cantidad":1
    },
    {
        "id": 8,
        "nombre": "Turrón de quacker",
        "tipo": "postre",
        "desc": "750 grs",
        "precio": 950,
        "imagen": "/public/images/tq.jpg",
        "cantidad":1
    },
    {
        "id": 9,
        "nombre": "Trufas",
        "tipo": "postre",
        "desc": "12 unidades",
        "precio": 750,
        "imagen": "/public/images/trufas.jpg",
        "cantidad":1
    }
]

const carrito = [];

function renderizarProductos(){

    const tienda = document.getElementById('tienda');

    const filtro = document.getElementById('filtro');

    BBDD.forEach((p)=>{
    
        let productoHTML = `
        <div class= "card-image d-flex justify-content-center">
        <div class="card card-text" style="width: 100rem;">
            <img class="card-img-top" src="${p.imagen}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p>$${p.precio}</p>
                <button class="btn pink" onclick="agregarProductoAlCarrito(${p.id})">Añadir al carrito</button>
            </div>
        </div>
        </div>
        `

        tienda.innerHTML += productoHTML;

    });

    
}

renderizarProductos();

function agregarProductoAlCarrito(id){


    let producto = BBDD.find(producto => producto.id === id);

    let productoEnCarrito = carrito.find(producto => producto.id === id);

    if(productoEnCarrito){
        
        productoEnCarrito.cantidad++;

        console.log(carrito);

    }else {
        
        producto.cantidad = 1;
        carrito.push(producto);

        console.log(carrito);
    }
 

    renderizarCarrito();
    calcularTotal();

}

function renderizarCarrito(){


    let carritoHTML = document.querySelector('#carrito');

    console.log(carritoHTML);

    let htmlCarrito = '';

    carrito.forEach((p, id)=>{
        
        htmlCarrito += `
        
        <div class="card-image d-flex justify-content-center">
        <div class="card card-text" style="width: 100rem;">
            <img class="card-img-top" src="${p.imagen}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p>$${p.precio}</p>
                <p>Cantidad: ${p.cantidad}</p>
                <button class="btn red" onclick="eliminarProductoDelCarrito(${id})">Eliminar</button>
            </div>
        </div>
        </div>
        `

    })
    
    carritoHTML.innerHTML = htmlCarrito;
}

function eliminarProductoDelCarrito(id) {

    carrito[id].cantidad--;

    if(carrito[id].cantidad === 0) {

        carrito.splice(id, 1);
    }

    renderizarCarrito();
}

function calcularTotal(){

    let total = 0;

    carrito.forEach((p)=>{
        
        total += p.precio * p.cantidad;
    });

    console.log(total);

    const t = document.getElementById('total');

    t.innerHTML = `<h5>$${total}</h5>`;

}


