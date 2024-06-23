const mostrarFuncion = () => () => console.log('camilo');

const res = mostrarFuncion();
res();
console.log(res);