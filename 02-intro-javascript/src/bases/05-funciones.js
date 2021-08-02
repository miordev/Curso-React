function saludar(nombre) {
  return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar('Milk'));
console.log(saludar2('Goku'));
console.log(saludar3('Vegeta'));
console.log(saludar4());

const getUser = () => {
  return {
    uid: 78378473,
    username: 'Miguel1234',
  };
};

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({
  uid: 748574,
  username: nombre,
});

const usuarioActivo = getUsuarioActivo('migue');
console.log(usuarioActivo);