import { actualizarCarrito } from "./components/carrito/actualizarCarrito.js";
import { mostrarProductos } from "./App.js";
import { actualizarProductosCarrito } from "./components/carrito/carritoIndex.js";
import { obtenerCarritoStorage } from "./components/carrito/carritoIndex.js";
// import { productos } from "./stock.js";

document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos();

    if (localStorage.getItem("carrito")) {
        const carritoStorage = obtenerCarritoStorage();
        actualizarProductosCarrito(carritoStorage);
        actualizarCarrito(carritoStorage);
    }
})