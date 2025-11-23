//se crea un arreglo llamado verduras con 4 elementos inciales
let verduras = ["Tomate", "Calabaza", "Cebolla", "Cilantro"];

verduras.push("Zanahoria");//se agrega un elemento al final
console.log(verduras);//se imprime el arreglo con el elemento agregado

verduras.pop();//se elimina el último elemento
console.log(verduras);//se imprime el arreglo con el último arreglo ya eliminado

verduras.unshift("Pepino")//se agrega un elemento al inicio
console.log(verduras);//se imprime el arreglo con un elemento agregado al incicio

verduras.shift()//se elimina el primer elemento
console.log(verduras);//se imprime el arreglo sin el primer elemento

console.log(verduras.length)//muestra cuántos elementos contiene el arreglo
