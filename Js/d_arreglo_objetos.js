//se declara un arreglo llamado inventario que contiene tres objetos
let inventario = [
    {   camisa: 25000, 
        pantalon: 30000, 
        zapatos: 50000 
    },

    {
        carpeta: "tamaño oficio",
        cuaderno : 3000,
        lapicero : "rojo",
    },

    {
        pintura: "tipo acuarelas",
        pincel: 8000,
        lienzo: 15000
    }

]

console.log("llaves de los objetos dentro del arreglo inventario");
//se recorre el arreglo inventario imprimiendo en consola la llaves de cada uno de los objetos que lo componen
for (const inventarioFinal of inventario) {
    console.log(Object.keys (inventarioFinal));
};


//se recorre el arreglo inventario imprimiendo en consola los valores de cada uno de los objetos que lo componen
console.log("valores de los objetos dentro del arreglo inventario");
for (const inventarioFinal of inventario) {
    console.log(Object.values (inventarioFinal));
};

//se recorre el arreglo inventario mostrando el contenido de cada uno de los objetos que lo componen

//como el valor del array son objetos, la consola imprime los objetos, con sus claves y valores internos.
console.log("contenido de los objetos dentro del arreglo inventario");
for (const inventarioFinal of Object.values(inventario)) {
    console.log(inventarioFinal);
};