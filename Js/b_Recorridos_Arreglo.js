//se crea un arreglo llamado verduras con 4 elementos iniciales
let verduras = ["Tomate", "Calabaza", "Cebolla", "Cilantro"];
//se crea un bucle for para que recorra cada elemento del arreglo
for(let i=0; i <verduras.length; i++){
    console.log(`${i} ${verduras[i]}`)//se imrpime el indice y el valor correpondiente del arreglo.
}
// recorre directamente loso valores del arreglo sin usar índices.
for(verd of verduras){
    console.log(verd)//imprime cada elemento uno por uno
}
console.log(verduras)//imprime el arreglo completo 

//es más útil usar for cuando cuando se necesita manejar índices para mostrar la posición de los elementos
//es más útil usar for...of cuando solo necesite los valores y no los índices del arreglo.
