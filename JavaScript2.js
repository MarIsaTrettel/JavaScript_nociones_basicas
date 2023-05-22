function addCuadrado(a,b) {

    function cuadrado(x) {
    
    return x * x;
    
    }
    
    return cuadrado(a) + cuadrado(b);
    
    }
    
    a = addCuadrado(2,3); // retorna 13
    
    b = addCuadrado(3,4); // retorna 25
    
    c = addCuadrado(4,5); // retorna 41

addCuadrado()