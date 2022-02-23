//Esto va en la pagina contacto//
let clickear = document.getElementById("compra1")
      clickear.addEventListener("click", comprar)

const usuario2 = null


console.log (usuario2?.nombre || "El usuario2 no existe")


function comprar () {
    let conficompra = document.getElementById("comprado");
    let usuario1 = document.getElementById("nombre").value;
   Toastify({
  text: "Gracias Por Su Compra " +usuario1 ,
  duration: 2000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){} // Callback after click
}).showToast();

console.log( usuario1 || "El usuario no existe");
}
let usuario1 = document.getElementById("nombre").value;

let clickear1 = document.getElementById("limpiar1")
    clickear1.addEventListener("click", limpiar)


    function limpiar () {
          swal({
  title: "Estas seguro??",
  text: "Se borraran todas tus compras!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Tus compras han sido eliminadas", {
      icon: "success",
    });
  } else {
    swal("Tu Compra esta a salvo!");
  }
});


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

console.log( 'usuario' ?? Nullish );

const usuario3 = {
    mail: "notiene@gmail.com",
    direccion: "Avenida siempre viva 1234"
}

const { mail , direccion } = usuario3
console.log (mail);

const {
    mail: correo,
    direccion: lugar
} = usuario3

console.log (correo);

const usuarios = ["usuario1", "usuario2", "usuario3", "usuario4" ]
console.log(...usuarios);