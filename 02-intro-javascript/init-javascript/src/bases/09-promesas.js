// Son funciones asíncronas
import { getHeroeById } from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => { // argumento que es un callback

//     setTimeout(() => {
//         const heroe = getHeroeById(4);
//         // resolve(heroe);
//         reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log(heroe);
// })
// .catch((err) => {
//     console.warn(err);
// });

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => { // argumento que es un callback

        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000);
    });

    // return promesa;
};

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn)
    .finally(() => console.log('Se terminó la promesa')); // finally se ejecuta siempre, haya error o no