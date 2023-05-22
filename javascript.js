/**FUNCIONES
Es un "subprograma" que puede ser llamado por código externo (o interno en caso de recursión) a la función. 
 */

/* Declarando la función 'myFunc' */

function myFunc(elobjeto)

{

elobjeto.marca= "Toyota";

}

/*Declarando la variable 'mycar';
* Se crea e inicializa el nuevo objeto;
* para hacer referencia a él mediante 'mycar'*/

var mycar = {
marca: "Honda",
modelo: "Accord",
año: 1998
};

/* Mostrando 'Honda' */
window.alert(mycar.marca);

/* Paso por referencia del objeto 'mycar' a la función 'myFunc'*/
myFunc(mycar);

/*Muestra 'Toyota' como valor de la propiedad 'marca'
 del objeto, que ha sido cambiado por la función.*/
window.alert(mycar.marca);

//FUNCION RECURSIVA

function loop(x) {

    if (x >= 10) // "x >= 10" es la condición de salida (equivalente a "!(x < 10)")
    
    return;
    
    // haz algo
    
    loop(x + 1); // la llamada recursiva
    
    }
    
    loop(0);

// FUNCION ANIDADAS Y CIERRE

function addCuadrado(a,b) {

    function cuadrado(x) {
    
    return x * x;
    
    }
    
    return cuadrado(a) + cuadrado(b);
    
    }
    
    a = addCuadrado(2,3); // retorna 13
    
    b = addCuadrado(3,4); // retorna 25
    
    c = addCuadrado(4,5); // retorna 41