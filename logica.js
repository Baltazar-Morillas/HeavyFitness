//LOGICA JS
let productosJSON = [];
let dolarCompra;

let totalCarrito;
let suplementosCards = document.getElementById("cards");
let botonFinalizar = document.getElementById("finalizar");
let carrito =JSON.parse(localStorage.getItem("carrito")) || [];

/*Luxon*/
const DateTime = luxon.DateTime;
//momento en que se ingresa a la web
const ahora = DateTime.now();

if(carrito.lenght != 0){
    console.log("Recuperando carro");
    dibujarTabla();
};

obtenerDolar();//Lo pido primero para poder pasar los precios en dolares, ya que es un proceso asincronico

function dibujarTabla(){
    for(const producto of carrito){
        document.getElementById("tablabody").innerHTML += `
       <tr>
           <td>${producto.id}</td>
           <td>${producto.nombre}</td>
           <td>$${producto.precio}</td>
           <td><button class="btn btn-light" onclick="eliminar(event)">🗑️​</button></td>
       </tr>
       `;
       totalCarrito = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
       document.getElementById("total").innerText = "Total a pagar $: "+totalCarrito;
    }
}

function renderizarProductos() {
    for (const producto of productosJSON) {//se coloca += para que una card no pise a la otra. El toFixed(2) lo que hace es mostrarme solo los 2 primeros decimales.
        suplementosCards.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src=${producto.img} class="card-img-top" alt=${producto.nombre}>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
            </div>
            <p class="precio"><b>$${(producto.precio/dolarCompra).toFixed(2)}</b></p>
            <button id="btn${producto.id}" class="btn btn-dark">Comprar</button>
        </div>
        `;
    }
   
     //EVENTOS
     productosJSON.forEach((producto)=>{
         //Evento para cada boton
         document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
             agregarAlCarrito(producto);
         })
     })
}

// renderizarProductos();

function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    console.table(carrito);
    Swal.fire({
        title: productoAComprar.nombre,
        text: "El producto ha sido agregado al carrito!",
        imageUrl: productoAComprar.img,
        imageWidth: 200,
        imageHeight: 200,
        showConfirmButton: false,
        timer:1500
    });
    // alert("Producto "+productoAComprar.nombre+" agregado al carrito!");
    document.getElementById("tablabody").innerHTML += `
    <tr>
        <td>${productoAComprar.id}</td>
        <td>${productoAComprar.nombre}</td>
        <td>$${productoAComprar.precio}</td>
        <td><button class="btn btn-light" onclick="eliminar(event)">🗑️​</button></td>
    </tr>
    `;
    let totalCarrito = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
    document.getElementById("total").innerText = "Total a pagar $: "+totalCarrito;
    //storage
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

//para eliminar productos del carro
function eliminar(ev){
    console.log(ev);
    let fila = ev.target.parentElement.parentElement;
    console.log(fila);
    let id = fila.children[0].innerText;
    console.log(id);
    let indice = carrito.findIndex(producto => producto.id == id)
    console.log(indice);
    carrito.splice(indice,1);

    fila.remove();
    let preciosAcumulados = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
    total.innerText="Total a pagar $: "+preciosAcumulados;
    //storage
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

//Obtener valor dolar
function obtenerDolar(){
    const URLDOLAR = "https://api.bluelytics.com.ar/v2/latest";
    fetch(URLDOLAR)
        .then(respuesta => respuesta.json())
        .then(cotizaciones => {
            const dolarBlue =cotizaciones.blue;
            console.log(dolarBlue);
            dolarCompra=dolarBlue.value_buy;
            //Recien ahora que tenemos el dolar podemos llamar a la siguiente funcion
            obtenerJSON();
        })
}

//GETJSON de productos.json
async function obtenerJSON(){
    const URLJSON = "../productos.json";
    const resp = await fetch(URLJSON);
    const data = await resp.json();
    productosJSON = data;
    //Ahora tengo el dolar y las productos, se pueden renderizar las cards
    renderizarProductos();
}

//Cerrando la compra
botonFinalizar.onclick = () => {
    if(carrito.length==0){
        Swal.fire({
            title:"El carrito esta vacio",
            text:"Agregue un producto",
            icon:"error",
            showConfirmButton: false,
            timer:1500
        })
    }else{
        carrito = [];
        document.getElementById("tablabody").innerHTML="";
        let infoTotal = document.getElementById("total");
        infoTotal.innerText="Total a pagar $: ";
        Toastify({
            text:"Pronto recibira un mail de confirmacion",
            duration: 2000,
            gravity:'bottom',
            position:'left',
            style:{
                color: 'black',
                background:'linear-gradient(to right, #7FFFD4, #F0FFFF)'
            }
        }).showToast();

        //Quiero medir intervalo
        const cierreDeCompra = DateTime.now();
        const interval = luxon.Interval;
        const tiempo = interval.fromDateTimes(ahora, cierreDeCompra);
        console.log("Tardaste "+tiempo.length('seconds')+" en comprar");
        localStorage.removeItem("carrito");
    }
}

