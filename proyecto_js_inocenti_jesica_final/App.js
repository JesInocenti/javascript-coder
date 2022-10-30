import { carritoIndex } from "./components/carrito/carritoIndex.js";
import productosController from "./Controller/productosController.js";


export const mostrarProductos = async () => {
  const contenedorProductos = document.getElementById("producto-contenedor");

  const productos = await productosController()

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                          <img src=${producto.imagen}>
                          <span class="card-title">${producto.nombre}</span>
                          <a class="btn-floating halfway-fab wabes-effect waves-light pink" id=boton${producto.id}><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                            <p>Prsentación: ${producto.desc}</p>
                            <p>Precio: $${producto.precio}</p>
                        </div>
                       `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      carritoIndex(producto.id);
    });
  });
}

