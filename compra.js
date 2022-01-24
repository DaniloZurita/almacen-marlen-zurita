//Este se encuentra en la pagina producto//

let pedido = prompt("Ingresa tu pedido");
if (pedido == "") {
    alert("No realizaste ninguna compra");
}
else {
    switch (pedido.toLowerCase()) {
        case "queso":
            alert("Queso añadido al carrito");
            break;
        case "snacks":
            alert("Snacks añadidos al carrito");
            break;
        case "cerveza":
            alert("Cerveza añadido al carrito");
            break;
        case "caramelos":
            alert("Caramelos añadidos al carrito");
            break;
        default:
           alert("No tenemos ese producto en stock. Nuestros productos son: Queso, Snacks, Cerveza, Caramelos");
           let pedido = prompt("Ingresa tu pedido");


    }
}


/*Javi, intente de muchas maneras que despues del default, me pida de vuelta el prompt y que pueda pedir el cliente
repitiendose el ciclo, no pude, ¿como tendria que hacer para que se repita el ciclo? Hasta que el cliente pueda entrar en un case*/
