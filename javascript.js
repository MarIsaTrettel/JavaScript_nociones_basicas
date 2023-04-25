/** Opción 1: Bucle con let **/

console.log("Antes: ", p); // Antes: undefined

for (let p = 0; p < 3; p++)

console.log("- ", p); // Durante: 0, 1, 2

console.log("Uso LET - Después: ", p); // Después: undefined

/** Opción 2: Bucle con var **/

console.log("Antes: ", p); // Antes: undefined

for (var p = 0; p < 3; p++)

console.log("- ", p); // Durante: 0, 1, 2

console.log("Uso VAR - Después: ", p); // Después: 3 

/**Vemos que utilizando let la variable p sólo existe dentro del bucle, ámbito local, 
mientras que utilizando var la variable p sigue existiendo fuera del bucle, ya que 
debe tener un ámbito global o a nivel de función. **/

const NAME = "Contante: Manu";

console.log(NAME);