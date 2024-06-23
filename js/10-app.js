
const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
})

const guardarEmail = info => ({
    gualdalEmail(email){
        console.log(`guardando Email`);
        info.email = email
    }
})

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Email del cliente ${info.nombre} es ${info.email}`);
    }
})
const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
})
const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto} `);
    }
})

function Cliente(nombre,email,empresa){
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info),
    )
}    

function Empleado(nombre,email,puesto){
    let info ={
        nombre,
        email,
        puesto
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info),
    )
}    

const cliente1 = new Cliente('camilo',null,'cualquiera');
cliente1.mostrarNombre();
cliente1.gualdalEmail("camilo@gmail.com")
cliente1.mostrarEmail();
cliente1.mostrarEmpresa();
console.log("~~~");
const empleado2 = new Empleado('Carlos',null,'barrendero')
empleado2.mostrarNombre()
empleado2.gualdalEmail('carlito@gmail.com');
empleado2.mostrarEmail()
empleado2.mostrarPuesto()
































// const obtenerNombre = info => ({
//     mostrarNombre(){
//         console.log(` Nombre :${info.nombre}`);
//     }
// })

// const guardarEmail = info => ({
//      agregarEmail(email){
//         info.email = email;
//         console.log(`Guardando Email en ${info.nombre}`);
//     }
// })

// const obtenerEmail = info => ({
//     mostrarEmail(){
//         console.log(`el correo de ${info.nombre} es ${info.email}`);
//     }
// })

// const obtenerEmpresa = info => ({
//     mostrarEmpresa(){
//         console.log(` el cliente ${info.nombre} es de la empresa ${info.empresa}`);
//     }
// })

// const obtenerPuesto = info => ({
//     mostrarPuesto(){
//         console.log(` el Empleado ${info.nombre} tiene puesto de: ${info.puesto}`);
//     }
// })
// function Cliente(nombre,email,empresa){
//     let info = {
//         nombre,
//         email,
//         empresa,   
//     }


//     return Object.assign(
//         info,
//         obtenerNombre(info),
//         guardarEmail(info),
//         obtenerEmail(info),
//         obtenerEmpresa(info),
//     )
// }

// function Empleado(nombre,email,puesto){
//     let info = {
//         nombre,
//         email,
//         puesto,   
//     }
//     return Object.assign(
//         info,
//         obtenerNombre(info),
//         guardarEmail(info),
//         obtenerEmail(info),
//         obtenerPuesto(info),
//     )
// }

// const cliente = Cliente('Camilo',null,'upc');
// cliente.mostrarNombre();
// cliente.agregarEmail('camilo@hotmail.com');
// cliente.mostrarEmail();
// cliente.mostrarEmpresa();
// const empleado = Empleado('alicia',null,'Programadora');
// empleado.mostrarNombre();
// empleado.agregarEmail('alicia@gmail.com');
// empleado.mostrarEmail();
// empleado.mostrarPuesto();