/**Objetos básicos en JavaScript
 * En Javascript, existe un tipo de dato llamado objeto. No es más que una variable especial que puede 
 * contener más variables en su interior.De esta forma, tenemos la posibilidad de organizar múltiples 
 * variables de la misma temática dentro de un objeto. **/

const OBJETO = new Object(); // Esto es un objeto «genérico» vacío

/**en Javascript se prefiere utilizar lo que se llaman los literales**/

const objeto = {}; // Esto es un objeto vacío

// Declaración de un objeto

const player = {

    name: "Manu",
    
    life: 99,
    
    strength: 10,
    
    }; //Estas variables dentro de los objetos se suelen denominar propiedades.


//Ver la informacion dentro de los parametros:

    // Notación con puntos

        console.log(player.name); // Muestra "Manu"

        console.log(player.life); // Muestra 99

    // Notación con corchetes - cuando se utilizan espacios en el nombre de la propiedad. 
    //Es imposible hacerlo con la notación con puntos.

        console.log(player["name"]); // Muestra "Manu"

        console.log(player["life"]); // Muestra 99