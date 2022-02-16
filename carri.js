//Esto va en la pagina contacto//
let clickear = document.getElementById("compra1")
      clickear.addEventListener("click", comprar)



function comprar () {
    let conficompra = document.getElementById("comprado");
    let usuario1 = document.getElementById("nombre").value;
    let nombre2 = document.createElement("p")
    conficompra.innerHTML = "<h2> Muchas Gracias Por Su compra</h2>" + usuario1;
    document.body.appendChild(comprado);

console.log(usuario1);
}
let usuario1 = document.getElementById("nombre").value;

let clickear1 = document.getElementById("limpiar1")
    clickear1.addEventListener("click", limpiar)

    function limpiar () {
        console.log("No compraron nada")


    }

    let mover = document.getElementById("letra")
mover.onchange = () => {console.log("SeleccionaRRSS")};


let input1 = document.getElementById("lista")
input1.addEventListener('input' , () => {
console.log(input1.value)})

localStorage.setItem('usuario', JSON.stringify(usuario1));

function recuperar() {
let recuperarLS = JSON.parse(localStorage.getItem('usuario'))}

recuperar();