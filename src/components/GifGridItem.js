// Componente que va a tener mas elemntos, va a mostrar la imagen o otras cosas

import React from 'react';

export const GifGridItem = ({ title, url }) => { // GifGridItem es un nuevo componente que se pondra en el archivo de GifGrid.js 
                            // aqui se toma solo el titulo y el url de las imagenes
    return ( // aqui regresamos la imagen pero ya impresa en el html de la pagina con su titulo
        <div className="card animate__animated animate__backInDown">
            <img src={ url } alt={ title } /> {/* colocamos la imagen */}
            <p> { title } </p> {/* colocamos el valor del titulo ( title ) dentro de un p ( parrafo ) */}
        </div>
    )
};

// NOTA: className es como se nombra a una clase normal para el html,
// pero aqui se confunde con las clases de Javascript,
// por ello se nombra className a una clase para html