
let yourNumber = " 543513103452";
    let yourMessage = `Su compra confirmada por un total de $250`;

function getLinkWhastapp (){

      number = yourNumber;
      message = yourMessage.split(" ").join("%20");

      return (
        "https://api.whatsapp.com/send?phone=" + number + "&text=%20" + message
      );
    }
    let linkWhatsapp = getLinkWhastapp();
    let btnRealizarCompra = document.getElementById("btnRealizarCompra");
    btnRealizarCompra.addEventListener("click", function () {
      window.open(linkWhatsapp, "_blank");
    });
  
