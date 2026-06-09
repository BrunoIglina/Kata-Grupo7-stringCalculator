export function Sumar(numeros) {
 if (numeros === '') {
    return 0;
  }
  if (numeros.includes(',')) {
    const partes = numeros.split(',');
    return partes.reduce((suma, parte) => suma + Number.parseInt(parte, 10), 0);
  }

  return Number.parseInt(numeros, 10);
}

