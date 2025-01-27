const greeting = function (name) {
    return 'Hola ' + name;
}

const greeting2 = (name) => {
    return 'Hola ' + name;
}

const greeting3 = (name) => 'Hola ' + name;

const getUser = () => (
    {
        name: 'Luis',
        lastName: 'Ortega'
    }
);

console.log(getUser());

// Tarea
// 1. Transformar a una función de flecha
// 2. Debe retornar un objeto implícito
// 3. Pruebas

// function getUsuarioActivo(name) {
//     return {
//         uid: 'ABC123',
//         username: name
//     }
// }

// const usuarioActivo = getUsuarioActivo('Luis');
// console.log(usuarioActivo)

// Resultado

const getUsuarioActivo = (name) => (
    {
        uid: 'ABC123',
        name: name
    }
);

console.log(getUsuarioActivo('Luis'));