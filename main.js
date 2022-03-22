/* numeros = [5, 3, 2, 8, 1, 4, 0];
temp = 0;

for (let i = 0; i < numeros.lenght; i++) {
  if (numeros[i] % 2 == 0) {
  }
}*/

/* numeros = [5, 3, 2, 8, 1, 4, 0];
cuentaintercambios = 0;

for (ordenado = false; !ordenado; ) {
  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] % 2 != 0 && numeros[i + 1] % 2 != 0) {
      //Intercambiamos valores
      variableauxiliar = numeros[i];
      numeros[i] = numeros[i + 1];
      numeros[i + 1] = variableauxiliar;
      //indicamos que hay un cambio
      cuentaintercambios++;
      console.log(numeros);
    } else if (numeros[i] % 2 == 0 && numeros[i + 1] % 2 != 0) {
      //Intercambiamos valores
      variableauxiliar = numeros[i];
      numeros[i] = numeros[i + 1];
      numeros[i + 1] = variableauxiliar;
      //indicamos que hay un cambio
      cuentaintercambios++;
      console.log(numeros);
    }
    console.log(numeros);
  }

  //Inicializamos la variable de nuevo para que empiece a contar de nuevo
  cuentaintercambios = 0;
}

numeros = [5, 3, 2, 8, 1, 4, 0];
ordenado = false;
for (let i = 0; i < numeros.lenght - 1; i++) {
  for (let j = 0; j < numeros.lenght; j++) {
    if ((numeros[i] % 2 != 0) < (numeros[j] % 2 != 0)) {
      variableauxiliar = numeros[i];
      numeros[i] = numeros[j];
      numeros[j] = variableauxiliar;
    } else if (numeros[i] % 2 == 0) {
      ordenado = true;
    }
    console.log(numeros);
  }
}

numeros = [5, 3, 2, 8, 1, 4, 0];
ordenado = false;
for (ordenado = false; !ordenado; ) {
  for (let i = 0; i < numeros.lenght - 1; i++) {
    if ((numeros[i] % 2 != 0) < (numeros[j] % 2 != 0)) {
      variableauxiliar = numeros[i];
      numeros[i] = numeros[j];
      numeros[j] = variableauxiliar;
    } else if (numeros[i] % 2 == 0) {
      ordenado = true;
    }
  }
  console.log(numeros);
} */

numeros = [5, 3, 2, 8, 1, 4, 0];
cuentaintercambios = 0;

for (ordenado = false; !ordenado; ) {
  for (let i = 0; i < numeros.length - 1; i++) {
    if ((numeros[i] % 2 != 0) && (numeros[i + 1] % 2 != 0)) {
      //Intercambiamos valores
      variableauxiliar = numeros[i];
      numeros[i] = numeros[i + 1];
      numeros[i + 1] = variableauxiliar;
      //indicamos que hay un cambio
      cuentaintercambios++;
    }
    if ((numeros[i] % 2 == 0) && (numeros[i + 1] % 2 != 0)) {
        //Intercambiamos valores
        variableauxiliar = numeros[i];
        numeros[i] = numeros[i + 1];
        numeros[i + 1] = variableauxiliar;
        //indicamos que hay un cambio
        cuentaintercambios++;
      }

  }
  console.log(numeros);
}
