/**Objeto Math
 objeto interno de Javascript que tiene incorporadas ciertas constantes y métodos (funciones) para trabajar matemáticamente.
 **/

/**Constantes de Math

Math.E	        Número de Euler
Math.LN2	    Logaritmo natural en base 2
Math.LN10	    Logaritmo decimal
Math.LOG2E	    Logaritmo base 2 de E
Math.LOG10E	    Logaritmo base 10 de E
Math.PI	        Número PI o Π
Math.SQRT1_2	Raíz cuadrada de 1/2
Math.SQRT2	    Raíz cuadrada de 2 **/

/**Métodos matemáticos

Math.abs(x)	        Devuelve el valor absoluto de x.
Math.sign(x)	        Devuelve el signo del número: 1 positivo, -1 negativo
Math.exp(x)	            Exponenciación. Devuelve el número e elevado a x.
Math.expm1(x)	        Equivalente a Math.exp(x) - 1.
Math.max(a, b, c...)	Devuelve el número más grande de los indicados por parámetro.
Math.min(a, b, c...)	Devuelve el número más pequeño de los indicados por parámetro.
Math.pow(base, exp)	    Potenciación. Devuelve el número base elevado a exp.
Math.sqrt(x)	        Devuelve la raíz cuadrada de x.
Math.cbrt(x)	        Devuelve la raíz cúbica de x.
Math.imul(a, b)	        Equivalente a a * b, pero a nivel de bits.
Math.clz32(x)	        Devuelve el número de ceros a la izquierda de x en binario (32 bits). */

/**Método Math.random()
 
Math.random()           Devuelve un número al azar entre 0 y 1 con 16 decimales.*/

        let x = Math.random();// Obtenemos un número al azar entre [0, 1) con 16 decimales

        x = x * 5;// Multiplicamos dicho número por el valor máximo que buscamos (5)

        x = Math.floor(x);// Redondeamos inferiormente, quedándonos sólo con la parte entera

        console.log(x); //Vemos el resultado

//Otras formas

// Número al azar entre 0 y 5 (no incluido)

        const j = Math.floor(Math.random() * 5);
        console.log(j);

// Equivalente al anterior

        const p = ~~(Math.random() * 5);
        console.log(p);

/**Métodos de logaritmos

Math.log(x)     Devuelve el logaritmo natural en base e de x. Ej: loge x o ln x
Math.log10(x)   Devuelve el logaritmo decimal (en base 10) de x. Ej: log10 x ó log x
Math.log2(x)    Devuelve el logaritmo binario (en base 2) de x. Ej: log2 x
Math.log1p(x)   Devuelve el logaritmo natural de (1+x). Ej: loge (1+x) o ln (1+x) */ 

/** Métodos de redondeo
Math.round(x)   Devuelve el redondeo de x (el entero más cercano)
Math.ceil(x)    Devuelve el redondeo superior de x. (el entero más alto)
Math.floor(x)   Devuelve el redondeo inferior de x. (el entero más bajo)
Math.fround(x)  Devuelve el redondeo de x (flotante con precisión simple)
Math.trunc(x)   Trunca el número x (devuelve sólo la parte entera)*/

        // Redondeo natural, el más cercano

        console.log(Math.round(3.75)); // 4

        console.log(Math.round(3.25)); // 3

        // Redondeo superior (el más alto)

        console.log(Math.ceil(3.75)); // 4

        console.log(Math.ceil(3.25)); // 4

        // Redondeo inferior (el más bajo)

        console.log(Math.floor(3.75)); // 3

        console.log(Math.floor(3.25)); // 3

        // Redondeo con precisión

        console.log(Math.round(3.123456789)); // 3

        console.log(Math.fround(3.123456789)); // 3.1234567165374756

        // Truncado (sólo parte entera)

        console.log(Math.trunc(3.75)); // 3

        console.log(Math.round(-3.75)); // -4

        console.log(Math.trunc(-3.75)); // -3

/**Métodos trigonométricos
Math.sin(x)             Seno de x
Math.asin(x)            Arcoseno de x
Math.sinh(x)            Seno hiperbólico de x
Math.asinh(x)           Arcoseno hiperbólico de x
Math.cos(x)             Coseno de x
Math.acos(x)            Arcocoseno de x
Math.cosh(x)            Coseno hiperbólico de x
Math.acosh(x)           Arcocoseno hiperbólico de x
Math.tan(x)             Tangente de x
Math.atan(x)            Arcotangente de x
Math.tanh(x)            Tangente hiperbólica de x
Math.atanh(x)           Arcotangente hiperbólica de x
Math.atan2(x, y)        Arcotangente del conciente de x/y
Math.hypot(a, b..)      Devuelve la raíz cuadrada de a2 + b2 + ...
 */

