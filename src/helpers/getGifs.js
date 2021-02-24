
// Necesito recibir la categoria y luego una peticion http.

export const getGifs = async( category ) => {
            // aqui colocamos category adentro de url, para que cuando coloques alguna palabra y des enter, 
            //de respuesta te regrese imagenes con el mismo titulo de tu palabra que buscastes. se añade con signo $ y el llaves colocas encodeURI y tu elemnto
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=cgQah45u7ompStZbqXq4dzKZw4q9G960`
    const resp = await fetch( url );   // constante llamada respuesta del url, si se hizo correctamente
    const { data } = await resp.json();

    const gifs = data.map( img =>{ // Extraer la inofrmacion de las imagenes, img va a barrer cada una de esas imagenes 
        return { // este return va a transformar cada uno de los elementos que estan dentro del arreglo de img y va a retornar un nuevo objeto con la informacion que me interesa
            id: img.id, // en este caso me interesa el id de la imagen
            title: img.title, // me interesa el title ( titulo ) de la imagen, lo saco de img y ahi tomo el title
            url: img.images.downsized_medium.url // me interesa el url de la imagen, lo saco de img, lo tomo de images, lo saco de downsized_medium y de ahi tomo el url
        }
    })

    return gifs; // regresar los gifs
}