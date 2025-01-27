// Desestructuración de arreglos
// Asignación desestructurante
let a, b, rest;
[a, b] = [10, 20];

// console.log(a);
// console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50, 60];

// console.log(rest);

const x = [10, 20, 30, 40, 50, 60];
const [y, z, ...resto] = x; // y = 10, z = 20

// console.log(resto);

const personajes = ['Goku', 'Saitama', 'Mikey', 'Tanjiro', 'Ranma'];
const [, , p3] = personajes;

// console.log(p3);

const retornaArreglo = (array) => {
    return ['ABC', 123];
};

const [strings, numbers] = retornaArreglo(personajes);
// console.log(strings, numbers);

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. Se llamará setNombre
const useState = (value) => {
    return [value, (name) => { console.log(name) }];
};

const [nombre, setNombre ] = useState('Naruto');
console.log(nombre);
setNombre('Goku');

