// Desestructuración de objetos
// Asignación desestructurante

const persona = {
    name: 'Luis',
    age: 23,
    clave: 'Spiderman',
    rango: 'Soldado'
};

// const { name, age, uid } = persona; // Extracción de información

// const retornaPersona = (usuario) => {
//     const {name, age, uid} = usuario;
//     console.log(name, age, uid);
// };

const useContext = ({ name, age, clave, rango = 'Capitán' }) => {
    // console.log(name, age, clave, rango); // Da prioridad a la propiedad del objeto
    return {
        nombreClave: clave,
        anios: age,
        location: {
            lat: 12.23423,
            long: 34.12352
        }
    }
};

const { nombreClave, anios, location: {lat, long} } = useContext(persona); // Desestructuración anidada
console.log(nombreClave, anios);
console.log(lat, long);