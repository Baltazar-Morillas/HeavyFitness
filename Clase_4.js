let opcion = prompt("*** Menu de compra ***\nEscriba uno de los numeros para saber el precio del producto y agregarlo al carrito. En el caso de no querer comprar nada escriba (salir).\n1-Cinturón de levantamiento de pesas de cuero Everlast.\n2-Rueda doble para abdominales QUUZ.\n3-Set de mancuernas de 10KG(Plástico).\n4-Soga jalón para tricpes.");

while(opcion != "salir"){
    switch(opcion){
        case "1":
            console.log("Se ha agregado Cinturón de levantamiento de pesas de cuero Everlast $499.99.");
            break;
        case "2":
            console.log("Se ha agregado Rueda doble para abdominales QUUZ $6.99.");
            break;
        case "3":
            console.log("Se ha agregado Set de mancuernas de 10KG(Plástico) $74.99.");
            break;
        case "4":
            console.log("Se ha agregado Soga jalón para tricpes $14.99.");
            break;
        default:
            console.log("No poseemos ese producto. Lo sentimos.");
            break;
    }
    opcion = prompt("*** Menu de compra ***\nEscriba uno de los numeros para saber el precio del producto y agregarlo al carrito. En el caso de no querer comprar nada escriba (salir).\n1-Cinturón de levantamiento de pesas de cuero Everlast.\n2-Rueda doble para abdominales QUUZ.\n3-Set de mancuernas de 10KG(Plástico).\n4-Soga jalón para tricpes.");
}