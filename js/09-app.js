const sumar = (a,b,c) => a + b + c;

// const resultado = suma(1,2,3);

// const parcial = a => (b,c) => suma(a,b,c);

// const primerNumero = parcial(5)
// const mostrarResultado = primerNumero(2,3);

// console.log(mostrarResultado);

const parcial = a => b => c => sumar(a,b,c);

// const primerNumero = parcial(1);
// const segundoNumero = primerNumero(2);
// const resultado = segundoNumero(3);

// practicamente es lo mismo    
const resultado = parcial(1)(2)(3);
console.log(resultado);