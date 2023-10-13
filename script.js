let solicitar = parseInt(prompt(" Ingresa la temperatura en grados Celsius: "));

function fahrenheit(){
  let resultado = 5/9*solicitar+32;
  console.log("el resultado en fahrenheit es: " + resultado);
  return resultado
}
function kelvin(){
  let resultado = solicitar + 273.15;
  console.log("el resultado en fahrenheit es: " + resultado);
  return resultado
}

alert("el resultado en fahrenheit es: " + fahrenheit());
alert("el resultado en fahrenheit es: " + kelvin());
