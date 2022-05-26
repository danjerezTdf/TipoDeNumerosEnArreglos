let largo: number = Number(
  prompt(`Ingrese la cantida de posiciones del arreglo:`)
);
let arregloUno: number[] = new Array(largo);
let positivos: number = 0;
let negativos: number = 0;
let cero: number = 0;

for (let i: number = 0; i < largo; i++) {
  arregloUno[i] = Number(prompt(`ingreser valor para la posicion ${i + 1}:`));
  if (arregloUno[i] >= 0) {
    if (arregloUno[i] > 0) {
      positivos++;
    } else {
      cero++;
    }
  } else {
    negativos++;
  }
}

console.log(`${positivos} positivos,${negativos} negativos y ${cero} ceros`);
