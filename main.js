//este se encuentra en el index

function pedido () {
    alert("Bienvenido a Almacen Marlen llena tus datos para realizar un pedido")
    
}
pedido()
class Cliente {
    constructor (nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
    confirmar() {
        alert("Hola " + this.nombre + " el pedido llegara a " + this.direccion);
    }
}
let usuario1 = new Cliente(prompt("Ingrese su nombre"), prompt("Ingrese la direccion del envio"))
usuario1.confirmar();