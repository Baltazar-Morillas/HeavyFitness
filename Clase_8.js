const carrito = [];
const proteina = { id: 1, img:"https://res.cloudinary.com/dbguo4alu/image/upload/v1664234662/HeavyFitness/Proteina_oehkii.jpg",nombre: "Proteina WHEY X-PRO COMPLEX ENA",descripcion: "Aporta una combinación explosiva de proteínas, creatina, taurina, glutamina, aminoácidos, vitaminas, minerales y antioxidantes, en una nueva fórmula mejorada. Es la proteína de suero más avanzada del mercado." ,precio: 16.99};
const preEntreno = { id: 2,img:"https://res.cloudinary.com/dbguo4alu/image/upload/v1664234662/HeavyFitness/yeah_buddy_jqyuy6.jpg" ,nombre: "Pre-entreno Ronnie Coleman Signature Series Yeah Buddy",descripcion: "Polvo de pre entrenamiento para mujeres y hombres, suplemento de energía, resistencia y enfoque con beta-alanina, 420 mg de cafeína por porción, bayas ácidas, 30 porciones.", precio: 34.99 };
const creatina ={ id: 3,img:"https://res.cloudinary.com/dbguo4alu/image/upload/v1664234662/HeavyFitness/creatina_pioj1n.jpg" , nombre: "Creatina micronizada en polvo ENA",descripcion: "Un excelente suplemento pre entrenamiento ya que colabora en la formación de los componentes energéticos, mejora la potencia muscular y retrasa la fatiga muscular, preparando al cuerpo para un mejor rendimiento fí­sico.", precio: 24.99 };

let suplementosCards = document.getElementById("cards");

suplementosCards.innerHTML = `
<div class="card" style="width: 18rem;">
    <img src=${proteina.img} class="card-img-top" alt=${proteina.nombre}>
    <div class="card-body">
      <h5 class="card-title">${proteina.nombre}</h5>
      <p class="card-text">${proteina.descripcion}</p>
    </div>
    <p class="precio"><b>$${proteina.precio}</b></p>
    <a href="#" class="btn btn-dark" id="boton">Comprar</a>
</div>
<div class="card" style="width: 18rem;">
    <img src=${preEntreno.img} class="card-img-top" alt=${preEntreno.nombre}>
    <div class="card-body">
      <h5 class="card-title">${preEntreno.nombre}</h5>
      <p class="card-text">${preEntreno.descripcion}</p>
    </div>
    <p class="precio"><b>$${preEntreno.precio}</b></p>
    <a href="#" class="btn btn-dark" id="boton">Comprar</a>
</div>
<div class="card" style="width: 18rem;">
    <img src=${creatina.img} class="card-img-top" alt=${creatina.nombre}>
    <div class="card-body">
      <h5 class="card-title">${creatina.nombre}</h5>
      <p class="card-text">${creatina.descripcion}</p>
    </div>
    <p class="precio"><b>$${creatina.precio}</b></p>
    <a href="#" class="btn btn-dark" id="boton">Comprar</a>
</div>
`;

let boton = document.getElementById("boton");

boton.onclick = () =>{
    agregarAlCarrito();
};

function agregarAlCarrito(){
    if(id=1){

        alert("El producto fue agregado con exito a su carrito!");
        carrito.push(proteina);
        console.table(carrito);
    }else if(id=2){
        alert("El producto fue agregado con exito a su carrito!");
        carrito.push(preEntreno);
        console.table(carrito);
    } else{
        carrito.push(creatina);
        console.table(carrito);
    }
};

