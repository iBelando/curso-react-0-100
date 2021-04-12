import { getHeroById } from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         //  Tarea
//         //  Importar la función getHeroById
//         const heroe = getHeroById(2);
//         //  reject(heroe);
//         resolve(heroe);
//     }, 2000);

// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

    setTimeout(() => {
        //  Tarea
        //  Importar la función getHeroById
        const heroe = getHeroById(id);
        if (heroe) {
            resolve(heroe);
        } else {
            reject('No se pudo encontrar el héroe');
        }
    }, 2000);

    });

}

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn);