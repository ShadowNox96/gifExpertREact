import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs( category )
            .then(gifs => {
                setTimeout(() => {
                    setState( {
                        data: gifs,
                        loading: false
                    } );

                }, 3000);
                
            });
    }, [ category ]);
    // Si la categoria cambia entonces vuelve a ejecutar el useEffect 
    

    
    return state; //{data: [], loading: true}

}