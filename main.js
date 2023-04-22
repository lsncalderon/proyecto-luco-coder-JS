//Simulador de venta de productos para el hogar, se puede comprar con o sin Gift card de descuento. El objetivo del simulador es probar que la gift card de descuento funciona y que da el valor total de la compra con descuento, o permite comprar sin giftcard//


class Objetos {
    constructor (nombre, color, material, precio){
        this.nombre = nombre;
        this.color = color;
        this.material = material;
        this.precio = precio;  
        }
}

const listaCompra = [];
listaCompra.push(new Objetos ("Maceta Pileta", "Gris", "Cemento y madera", 6500));
listaCompra.push(new Objetos ("Maceta Faro", "Gris", "Cemento y madera", 6000));


const carrito=[];
let opciones= true;
let unidadesCantidades = true;


let giftCard = "1234-5678";  /* Codigo para comprar con descuento */
let valorGift = 3000;
let valorMaceta = 6500;

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

while (opciones) {
        opciones = prompt ("Elegí una de las opciones del menú:\n\n1-Maceta Pileta  \n2-Maceta Faro \n\Selecciona -Cancelar- si no deseas seguir")

        if (opciones == "1" && giftCard==true){
            carrito.push(listaCompra[0].precio)
            let valorTotal = valorMaceta-valorGift
            alert('Producto a comprar: \n' + '\n' + listaCompra[0].nombre + '\n' + "Color: " + listaCompra[0].color + '\n'+ "Material: " + listaCompra[0].material + '\n' + "Precio: " + listaCompra[0].precio)
            alert('Tu compra tiene un descuento: \n' + '\n' + listaCompra[0].nombre  +  "\n" + "Precio total: " + valorTotal)
            unidades ();
            break;
          
         }else if (opciones == "1" && giftCard==false){
            carrito.push(listaCompra[0].precio)
            alert('Producto a comprar: \n' + '\n' + listaCompra[0].nombre + '\n' + "Color: " + listaCompra[0].color + '\n'+ "Material: " + listaCompra[0].material + '\n' + "Precio: " + listaCompra[0].precio)
            unidades ();
            break;

        }else if (opciones == "2" && giftCard==true){
            carrito.push(listaCompra[1].precio)
            let valorTotal = valorMaceta-valorGift
           listaCompra.push (opciones)
            alert('Producto a comprar: \n' + '\n' + listaCompra[1].nombre + '\n' + "Color: " + listaCompra[1].color + '\n'+ "Material: " + listaCompra[1].material + '\n' + "Precio: " + listaCompra[1].precio)
            alert('Tu compra tiene un descuento: \n' + '\n' + listaCompra[1].nombre  +  "\n" + "Precio total: " + valorTotal)
            unidades ();
            break;

        }else if (opciones == "2" && giftCard==false){
            carrito.push(listaCompra[1].precio)
            alert('Producto a comprar: \n' + '\n' + listaCompra[1].nombre + '\n' + "Color: " + listaCompra[1].color + '\n'+ "Material: " + listaCompra[1].material + '\n' + "Precio: " + listaCompra[1].precio)
            unidades ();
            break;

        }else if (opciones === null) { // el usuario pone “Cancelar”
        break; // salimos del bucle

        }else {
            alert ("Ninguna de las opciones es correcta");
        }
        opciones = prompt ("Elegí una de las opciones del menú:\n\n1-Maceta Pileta  \n2-Maceta Faro \n\nEscribe -Salir- si no deseas comprar")

        function unidades (){
            cantidades = parseInt(prompt("Ingresá la cantidad de unidades ó -Cancelar- si no deseas seguir"));
            while (unidadesCantidades) {
                if (cantidades > 0) {
                  
                } else if (cantidades == 0) {
                    unidadesCantidades = false;
                } else {
                    alert("Por favor, ingresa un valor númerico.");
                    cantidades = parseInt(prompt("Ingresá la cantidad de unidades -Cancelar- si no deseas seguir"));
                }
            }
        }
    
    }
 
alert('Gracias por tu visita. ¡Vuelve pronto!');

    





