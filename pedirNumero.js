function pedirNumero (min, max) 
{
  var numero;
  do {
    numero = prompt("Ingrese un número entre " + min +" y " + max + ":");
    numero = Number(numero); 
  } while (numero < min || numero > max);

  return numero;
}

function pedirNumeroMejorado (texto,min,max) {
  var numero;
  do {
    numero = prompt(texto + min +" y " + max + ":");
    numero = Number(numero); 
  } while (numero < min || numero > max);

  return numero;
}
