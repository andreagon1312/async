/*let dollar = 15

setTimeout(() => {
    const newPromise = new Promise((resolve, reject) =>{
        if (dollar > 0){
            resolve('gracias por los bucos ' + dollar);
        } else{
            reject('No hay money');
        }
    })

    newPromise
        .then((respuesta) => {
            console.log(respuesta)
        })
        .catch(err => console.log(err));
}, 3000) */

let galleta = 'pupu'

setTimeout(() => {
    const galletas = new Promise((resolve, reject) =>{
        if (galleta === 'canela'){
            resolve('si tiene sabor a canela ');
        } else{
            reject('No tiene ese sabor');
        }
    })

    galletas
        .then((respuestaGalleta) => {
            console.log(respuestaGalleta)
        })
        .catch(err => console.log(err));
}, 4000)
