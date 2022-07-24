let numero = parseInt(prompt("Empezaremos a sumar desde: "));
let verdadero = true;

while (verdadero){
    console.log("Nº ", numero);
    verdadero = confirm("Seguimos sumando?");
    numero++
}