let edad = parseInt(prompt ("Ingrese su edad: "));

let valorDeVerdad = esJubilado();

if (valorDeVerdad){
    mostrarAlertaJubilado();
}
else{
    felicitar ();
}