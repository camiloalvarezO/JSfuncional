const sumar = (a,b,c) => a+b+c;


// // const parcial = a => (b,c) => sumar(a,b,c);

// const primerNumero =parcial(5)
// const resultado = primerNumero(5,5)
// console.log(resultado);


const parcial = a => b => c => sumar(a,b,c)

const res = parcial(5)
const sul = res(4)
const tado = sul(3)

console.log(tado);


const res2 = parcial(1)(2)(3);
console.log(res2);