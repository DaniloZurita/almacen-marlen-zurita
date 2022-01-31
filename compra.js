//Este se encuentra en la pagina producto//
class Producto {
 constructor(id, nombre, precio){

        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
const producto1 = new Producto(1, 'Queso', 100);
const producto2 = new Producto(2, 'Snacks', 200);
const producto3 = new Producto(3, 'Cerveza', 300);
const producto4 = new Producto(4, 'Caramelos', 50);


const BBDD = [
    producto1, 
    producto2, 
    producto3, 
    producto4
   
]

const CARRITO = []
console.log(BBDD)

let pedido = prompt("Ingresa tu pedido por n°: 1-Queso/2-Snacks/3-Cerveza/4-Caramelos");
if (pedido == "") {
    alert("No realizaste ninguna compra");
}
else {
    switch (pedido.toLowerCase()) {
        case "1":
            alert("Queso añadido al carrito");
            function comprar(){
                CARRITO.push(BBDD[0])}
            break;
        case "2":
            alert("Snacks añadidos al carrito");
            function comprar(){
                CARRITO.push(BBDD[1])}
            break;
        case "3":
            alert("Cerveza añadido al carrito");
            function comprar(){
                   CARRITO.push(BBDD[2])}
            break;
        case "4":
            alert("Caramelos añadidos al carrito");
            function comprar(){
                CARRITO.push(BBDD[3])}
            break;
        default:
           alert("No tenemos ese producto en stock. Nuestros productos son: Queso, Snacks, Cerveza, Caramelos");
           let pedido = prompt("Ingresa tu pedido");


    }
}
 
 console.log(BBDD);


function sortA(a,b){

    if(a.precio > b.precio) {
        return -1;
    }
    if(a.precio < b.precio) {
        return 1;
    }
    return 0;
}

const caro = BBDD.sort(sortA)
console.log(caro);


