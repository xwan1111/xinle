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
    var esUnNumero;
    do {
        numero = prompt(texto + min + " y " + max + ":");
        esUnNumero = isNaN(numero);
        if (esUnNumero) {
            alert("Entrada no válida. Por favor, ingrese un número de nuevo: ");
        } else {
            numero = Number(numero);
        }
    } while (esUnNumero || numero < min || numero > max);
    return numero;
}
