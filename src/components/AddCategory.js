
// Componente que se encarge de crear una Caja de Texto

import React, { useState } from 'react';
import PropTypes from 'prop-types'; // importamos el PropTypes

export const AddCategory = ({setCategorias}) => { // aqui se destructuran los componentes y solo quiero llamar a setCategorias

    const [inputValue, setInputValue] = useState('');
    // el setInputValue es el que va a cambiar la caja de texto y el inputValue tiene por defecto un valor de un String, un Arreglo, un objeto, etc, aqui tiene un valor de un string de espacio vacio ('')

    const handleInputChange = (e) => { // constante que se lamara handleInputChange para extraer el valor del evento (e) en el onChange
        setInputValue( e.target.value ); // llamamos el setInputValue se coloco e.target.value, es la impresion del evento, las veces que sean
    }

    const handleSubmit = (e) => { // con la constante handleSumit lo que hace es que al escribir una palabra adentro de la caja de texto y hacer click, nos dispare algo en la pagina o busca algo
        e.preventDefault();  // esto es para prevenir el comportamiento por defecto de formulario y manejarlo

        if ( inputValue.trim().length > 2 ) { // Validacion: si esto es mayor a 2 letras, se llamara la siguiente instruccion
            setCategorias ( cats => [ inputValue, ...cats ] );  // llamamos aqui a setCategorias, para que al hacer Enter llame a setCategorias y dispare algo / cats = categorias que se van ir agregando en la caja de texto al preonar Enter
            setInputValue(''); // setInputValue lo mandamos como un string vacio ('')
        }
    }

    return(
        <form onSubmit={ handleSubmit }> {/* con el onSubmit lo que hace es evitar un refresh completo de la pagina. Ademas colocamos el handleSubmit que contiene el evento de dar click a lo que escribiste dentro de la caja de texto */}
            <input           // con el input se crea una caja de texto para que pueda escribir y buscar 
                type="text"  // Type es el tipo de valor que debe ser, aqui dice que debe de ser un valor de texto
                value={ inputValue }  // aqui se le puso el valor de inputValue, lo cual aparecera la caja de texto sin nada, por el valor del espacio vacio ( Checa Arriba )
                onChange={ handleInputChange } // el onChange se va a disparar cuando la caja de texto cambie, con esto puedes escribir adentro de la caja de texto lo que quieras sin afectar lo demas
            />
        </form>
    )
};

AddCategory.propTypes = {   // aqui con el PropTypes estamos diciendo que setCategorias esta marcada como requerida, sino seria un error
    setCategorias: PropTypes.func.isRequired // funcion requerida para este componente
};