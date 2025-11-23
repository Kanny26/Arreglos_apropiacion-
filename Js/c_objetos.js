//Se declara el objeto cimi que compone la informacion del programa de formacion
let cimi = {
    carrera : "Analisis y desarrollo de software",
    duracion : "21 meses",
    jornada : "Diurna",
    instructores : ["John Becerra", "Enzy Angarita", "Yeimi Barrera"]
}

//se imprime en consola cada una de las propiedades del objeto cimi
console.log(cimi.carrera);
console.log(cimi.duracion);
console.log(cimi.jornada);
console.log(cimi.instructores);

//Un objeto es mejor para este caso porque permite agrupar diferentes tipos de datos relacionados, ya que si usamos un arreglo solo podriamos almacenar una lista de valores sin asociar nombres o etiquetas a cada valor, o tendriamos que un arreglo que contenga otros arreglos, lo cual puede complicar el acceso a los datos.