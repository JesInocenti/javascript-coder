import { actualizarProductosCarrito, eliminarProductoCarrito } from "../carrito/carritoIndex.js";
import { actualizarCarrito } from "../carrito/actualizarCarrito.js";

const modalContenedor = document.querySelector('.modal-contenedor')
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito')
const botonVaciarCarrito = document.getElementById('btn-vaciar-carrito');
const botonConfirmarPedido = document.getElementById('btn-confirmar-compra');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("boton-eliminar")) {
        eliminarProductoCarrito(e.target.value)
    }
})

botonVaciarCarrito.addEventListener('click', () => {
    carritoDeCompras.length = 0
    actualizarCarrito();
})

botonConfirmarPedido.addEventListener('click', () => {
    swal({
        title: "Pedido enviado exitosamente",
        text: "Gracias por su compra!",
        icon: "success",
        buttons: false,
        timer: 1000
    })
})