const mostrarFuncion = () => () => console.log('Camilo Andres');

const fn = mostrarFuncion();

fn();


// const mostrarFuncion = () esta parte vendría siendo const fn = mostrarFuncion(); lo que tiene dentro se va a fn
// osea () => console.log('Camilo Andres');