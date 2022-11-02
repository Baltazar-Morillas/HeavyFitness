//LOGICA JS

const carrito = [];

let suplementosCards = document.getElementById("cards");

function renderizarProductos() {
    for (const producto of productos) {//se coloca += para que una card no pise a la otra
        suplementosCards.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src=${producto.img} class="card-img-top" alt=${producto.nombre}>
                <div class="card-body">
                   <h5 class="card-title">${producto.nombre}</h5>
                   <p class="card-text">${producto.descripcion}</p>
                 </div>
                <p class="precio"><b>$${producto.precio}</b></p>
                <button id="btn${producto.id}" class="btn btn-dark">Comprar</button>
            </div>
         `;
    }

    //EVENTOS
    productos.forEach((producto)=>{
        //Evento para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        })
    })
}

renderizarProductos();

function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    console.table(carrito);
    Swal.fire({
        title: productoAComprar.nombre,
        text: "El producto ha sido agregado al carrito!",
        imageUrl: productoAComprar.img,
        imageWidth: 200,
        imageHeight: 200,
    });
    // alert("Producto "+productoAComprar.nombre+" agregado al carrito!");
    document.getElementById("tablabody").innerHTML += `
    <tr>
        <td>${productoAComprar.id}</td>
        <td>${productoAComprar.nombre}</td>
        <td>$${productoAComprar.precio}</td>
    </tr>
    `;
    let totalCarrito = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
    document.getElementById("total").innerText = "Total a pagar $: "+totalCarrito;
}