// Componente que recibe el arreglo ('One Punch') como argumento
// y la cual se va a disparar la peticion http.

import React from 'react'; // useEffect me permite ejecutar cierto codigo de manera condicional y evita hacer ese codigo un ciclo infinito
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => { // constante llamada GifGrid la cual llama a Category

    const { data:images } = useFetchGifs( category );
    //const [images, setImages] = useState([]); // nuevo estado llamado images
    //useEffect( () => { // solo quiero que el componente se renderize una sola vez
    //    getGifs( category ) // esto retorma una promesa
    //        .then( setImages ); //regresamos el setImages
    //}, [ category ]) // arreglo de dependencias / aqui dice que si la categoria cambia, entonces volvera a ejecutar esta funcion

    return (  // que regrese el nombre de la categoria que escribiste, con la imagen y su titulo
        <>
            <h3 className="animate__animated animate__backInDown"> { category } </h3>

            {/* loading && <p className="animate__animated animate__flash">Loading</p> */}

            <div className="card-grid">

                {
                    images.map( img => ( // aqui ya solo amandamos img  
                        <GifGridItem     // aqui colocamos componente de "GifGridItem" del archivo de GifGridItem.js
                            key={ img.id } // key que es igual a img, el cual tomamos solo el id
                            { ...img }
                        />
                    ))
                }

            </div>
        </>
    )
}