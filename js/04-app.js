const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

const nombres = producto =>{
    return producto.nombre
}

const res = carrito.map(nombres);
 console.log(res);
console.log(carrito);

const m400 = p => p.precio >= 400;
// const res2 = carrito.map(m400) // retornaría true o false
const res2 = carrito.filter(m400)
console.log(res2);