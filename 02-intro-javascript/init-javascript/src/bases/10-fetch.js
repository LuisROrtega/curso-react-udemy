// FETCH API -> Permite hacer peticiones a endpoints sin necesidad de alguna librería (incluída en el navegador)

const apiKey = 'qRBB3zt5YnIJTCn502DOpKw3BEG4CNSx';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion // promesas en cadena
.then( res => res.json())
.then( ({data}) => {
    const {url} = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch(console.warn);