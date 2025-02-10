const getImage = async () => {
    try {
        const apiKey = 'qRBB3zt5YnIJTCn502DOpKw3BEG4CNSx';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); // await espera a que termine la promesa para continuar
        const { data } = await resp.json();
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);
    } catch (e) {
        console.error(e);
    }
}

getImage();