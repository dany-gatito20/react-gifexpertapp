// Los Custom Hooks funcionan como si fueran Functional Components,
// pueden tener efectos, reducer, contextos, etc.

import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect ( () => {

        getGifs( category )
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])

    return state; // { data:[], loading: true };
}