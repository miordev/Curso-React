const persona = {
  nombre: 'Tony',
  apellido: 'Start',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 3526362536,
    lat: 12.3232,
    alt: 3.5445,
  },
}

const persona2 = {...persona};
persona2.nombre = 'Peter';
persona2.direccion.ciudad = 'La Habana';

console.table(persona);
console.table(persona2);