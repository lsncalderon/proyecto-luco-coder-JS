//Simulador de venta de productos para el hogar, se puede comprar con o sin Gift card de descuento. El objetivo del simulador es probar que la gift card de descuento funciona y que da el valor total de la compra con descuento, o permite comprar sin giftcard//

//Variable del codigo Gift card

let giftCard = "1234-5678";

alert ("Bienvenidos a tienda Luco, encontraras cosas lindas para tu hogar.")

let acceso= prompt("¿Tienes una GiftCard de regalo?. Ingresá el código.")
    if(acceso === giftCard){
        alert ("Tienes un cupón de descuento por 3000 pesos.")
        giftCard=true;
    }
    else{
        alert ("No tienes un cupón de descuento, no te preocupes puedes continuar tu compra.")
        giftCard=false;
    }

//Funcion de comprar
function compraLuco (){
    let valorGift = 3000;
    let valorMaceta = 6500;
    let valorPortavasos =4500;
    let opciones = prompt ("Elegí una de las opciones del menú:\n\n1-Macetas: 6500 pesos \n2-Portavasos cuadrados: 4500 pesos \n\nEscribe -Salir- si no deseas comprar")

    while (opciones != "Salir"){

        if (opciones == "1" && giftCard==true){
            let valorTotal = valorMaceta-valorGift
            alert (`El precio de tu maceta es: ${valorMaceta} pesos y el total de tu compra con descuento ${valorTotal} pesos`);

        }else if (opciones == "1" && giftCard==false){
            alert (`El precio total de tu compra es: ${valorMaceta} pesos`);

        }else if (opciones == "2" && giftCard==true){
            let valorTotal = valorPortavasos-valorGift
            alert (`El precio de tu portavasos es: ${valorPortavasos} pesos y el total de tu compra con descuento ${valorTotal} pesos`);

        }else if (opciones == "2" && giftCard==false){
            alert (`El precio total de tu compra es: ${valorPortavasos} pesos`);

        }else if (opciones === null) { // el usuario pone “Cancelar”
        break; // salimos del bucle

        }else {
            alert ("Ninguna de las opciones es correcta");
        }
        opciones = prompt ("Elegí una de las opciones del menú: \n1-Macetas: 6500 pesos \n2-Portavasos cuadrados: 4500 pesos \n\nEscribe -Salir- si no deseas comprar")
    }
    alert('Gracias por tu visita. ¡Vuelve pronto!');
}

compraLuco();