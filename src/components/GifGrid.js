import React from 'react';
import { GigGridItem } from './GigGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
    // Custom hook
    const { data: images, loading } = useFetchGifs( category );
    
    return ( 
        <>
            <h3>{loading && <p>Loading</p> }</h3>
            <h3>{ category }</h3>
            <div className="card-grid">
                    { images.map((img) => (
                        <GigGridItem 
                            key= { img.id }
                            { ...img }
                        />
                    ))}
            </div>
        </>
     );
}
 
export default GifGrid;