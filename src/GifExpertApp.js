// Componente llamado GifExpertApp

import React, { useState } from 'react'; // importamos useState que esta dentro del paquete de React
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setCategorias] = useState(['One Punch']);  // aqui tenia un listado, pero solo aparece uno en la pantalla principal

    //const handleAdd = () => ( // agregar un nuevo elemnto al arreglo
        //setCategorias( ['Hunter X Hunter', ...categorias] )  // Primera forma de agregar un nuevo elemento con el boton de Agregar
    //    setCategorias( cats => [...cats, 'Hunter X Hunter'] )  // Segunda forma de agregar un nuevo elemento con el boton de Agregar
    //);

    return (
        <>
            <h2>GifExpertApp</h2> {/* Titulo */}
            <AddCategory setCategorias={ setCategorias } /> {/* Comunicacion entre componentes, aqui la llamamos con la referencia de setCategorias para que enteractuen entre si */}
            <hr />

            {/*<button onClick={ handleAdd }>Agregar</button>*/}  {/* Boton de click para Agregar nuevo elemento */}

            <ol>
                {
                    categorias.map( category => (  // el .map me sirve para transformar cada uno de los elemntos que estan dentro de su arreglo. Recibe 2 argunatos por defecto, 1.- el elemento del arreglo ( Category ), 2.- el indice
                        <GifGrid    // traemos GifGrid exportandola 
                            key={ category }  // el key sirve para que React sepa cual es el elemento que esta literado
                            category={ category } // category es igual a category que estor evaluando ( category de letras naranjas )
                        />
                    ))
                }
            </ol>
        </>
    )
};