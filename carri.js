//Esto va en la pagina contacto//

let usuario1 = {usuario:document.getElementById("nombre").value
} 

let clickear = document.getElementById("compra1")
      clickear.addEventListener("click", comprar)

function comprar () {
    let conficompra = document.getElementById("comprado");
    conficompra.innerHTML = "<h2> Muchas Gracias Por Su compra</h2>"
    document.body.appendChild(comprado);
}