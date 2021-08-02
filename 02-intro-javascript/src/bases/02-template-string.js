const nombre = "Miguel";
const apellido = 'Ordoñez';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

function getSaludo(nombre) {
  return 'Hola ' + nombre;
}

console.log(`Este es un texto ${getSaludo(nombreCompleto)}`);