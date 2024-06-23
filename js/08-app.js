const obtenerCliente = () => {

    const nombre = 'camilo';

    function mostrarNombre(){

        console.log(nombre);
    }

    return mostrarNombre;
}

const resultado = obtenerCliente();

console.log(resultado());