/**Constantes numéricas

Number.POSITIVE_INFINITY
Number.NEGATIVE_INFINITY
Number.MAX_VALUE
Number.MIN_VALUE
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
Number.EPSILON
Number.NaN
**/

/**NaN (Not A Number)
 * Este valor se usa para representar valores imposibles o indeterminados.
 * 0 / 0 (Indeterminaciones)
 * 4 - 'a' (Valores imposibles)
 * NaN + 4 (Operaciones con NaN como operando)
 */

        let num = NaN;

        // La siguiente operación, contra toda lógica, es falsa

        num == NaN; // false
        console.log (num == NaN)

        // Se debe usar Number.isNaN() para comprobar si el valor es NaN

        Number.isNaN(num); // true
        console.log (Number.isNaN(num))

        // Si comprobamos el tipo de dato de NaN, nos dirá que es numérico

        typeof num; // number
        console.log (typeof num)

/**Comprobaciones numéricas

Number.isFinite(n)
Number.isInteger(n)
Number.isSafeInteger(n)
Number.isNaN(n) **/

        // ¿Número finito?

        console.log (Number.isFinite(42)); // true

        console.log (Number.isFinite(Infinity)); // false, es infinito

        // ¿Número entero?

        console.log (Number.isInteger(5)); // true

        console.log (Number.isInteger(4.6)); // false, es decimal

        // ¿Número seguro?

        console.log (Number.isSafeInteger(1e15)); // true

        console.log (Number.isSafeInteger(1e16)); // false, es un valor no seguro

        // ¿No es un número?

        console.log (Number.isNaN(NaN)); // true

        console.log (Number.isNaN(5)); // false, es un número

/* Conversión numérica

Number.parseInt(s)
Number.parseInt(s, radix)
Number.parseFloat(s)
Number.parseFloat(s, radix) */

        console.log (Number.parseInt("42")); // 42

        console.log (Number.parseInt("42 Dolares")); // 42

        console.log (Number.parseInt("Número 42")); // NaN

        console.log (Number.parseInt("A")); // NaN

//parseInt() con dos parámetros, donde el primero es el texto con el número y el segundo es la base numérica del número:

        console.log (Number.parseInt("11101", 2)); // 29 en binario

        console.log (Number.parseInt("31", 8)); // 25 en octal

        console.log (Number.parseInt("FF", 16)); // 255 en hexadecimal

//Representación numérica

        console.log ((1.5).toExponential(2)); // "1.50e+0" en exponencial

        console.log ((1.5).toFixed(2)); // "1.50" en punto fijo
                
        console.log ((1.5).toPrecision(1)); // "2"