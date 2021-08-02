const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
};

const copyUseContext = ({nombre, clave, edad, rango = 'Capitan'}) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.74837483,
      lng: -34.5454,
    }
  };
};

const avenger = copyUseContext(persona);
const {nombreClave, anios, latlng: { lat, lng}} = avenger;

console.log(nombreClave, anios);
console.log(lat, lng);