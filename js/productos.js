const productos = [
    {
        id:1,
        nombre: "Maceta Pileta",
        color: "Gris",
        material: "Maceta en cemento, con plato de madera.",
        precio: 6500,
        imagen1: "maceta-pileta.png",
        imagen2: "maceta-pileta-medidas.png"
    },
    {
        id:2,
        nombre: "Maceta Faro",
        color: "Gris",
        material: "Maceta en cemento, con plato de madera.",
        precio: 6000,
        imagen1: "maceta-faro.png",
        imagen2: "maceta-faro-medidas.png"
    },
    {
        id:3,
        nombre: "Portavasos Cuadrados",
        color: "Blanco",
        material: "Set de 4 portavasos en Terrazo",
        precio: 4500,
        imagen1: "portavasos-cuadrado.png",
        imagen2: "portavasos-cuadrados-medidas.png"
    },
    {
        id:4,
        nombre: "Portavasos Redondos",
        color: "Blanco",
        material: "Set de4 portavasos en Terrazo",
        precio: 4500,
        imagen1: "portavasos-rendondo.png",
        imagen2: "portavasos-redondos-medidas.png"
    },
];

function guardadoProductosLS(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
};

function cargaProductosLS(){
    return JSON.parse(localStorage.getItem ("productos")) || [];
};

guardadoProductosLS(productos);
