/**Estructuras de Control
If          Condición simple: Si ocurre algo, haz lo siguiente...
If/else     Condición con alternativa: Si ocurre algo, haz esto, sino, haz lo esto otro...
?:          Operador ternario: Equivalente a If/else, método abreviado.
Switch      Estructura para casos específicos: Similar a varios If/else anidados.
 */

var nota = 7;

console.log("He realizado mi examen.");

if (nota >= 5) {

console.log("¡Estoy aprobado!");

}

console.log("He realizado mi examen. Mi resultado es el siguiente:" + nota);

if (nota < 5) {

calificacion = "suspendido";

} else {

calificacion = "aprobado";

}

console.log("Estoy", calificacion);

// Con operador ternario (condición ? verdadero : falso)
// Es una opción que sólo se recomienda utilizar cuando son if muy pequeños.

var nota = 7;

console.log("He realizado mi examen. Mi resultado es el siguiente:");

var calificacion = nota < 5 ? "suspendido":"aprobado";

console.log("Estoy", calificacion);

// Switch
// Este ejemplo funcionaría si sólo permitimos notas que sean números enteros, 
// es decir, números del 0 al 10, sin decimales.

switch (nota) {

    case 10:
    
    calificacion = "Insuficiente";
    
    break; //al final de cada caso es necesario indicar un break para salir del switch. 
    //En el caso que no sea haga, el programa saltará al siguiente caso, aunque no se cumpla la condición específica.
    
    case 9:
    
    case 8:
    
    calificacion = "Notable";
    
    break;
    
    case 7:
    
    case 6:
    
    calificacion = "Bien";
    
    break;
    
    case 5:
    
    calificacion = "Suficiente";
    
    break;
    
    case 4:
    
    case 3:
    
    case 2:
    
    case 1:
    
    case 0:
    
    calificacion = "Insuficiente";
    
    break;
    
    default:
    
    // Cualquier otro caso
    
    calificacion = "Nota errónea";
    
    break;
    
    }
    
    console.log("He obtenido un", calificacion);