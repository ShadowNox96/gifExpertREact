import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {
    const [inputValue, setInputValue] = useState('');

    const inputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        
        if( inputValue.trim().length > 2){
            setCategories( cats => [inputValue ,...cats] );
            setInputValue('');
            document.querySelector('form').reset();
        }
        
    } 
    return ( 
        <> 
           <form onSubmit= { handleSubmit }>
                <label htmlFor="inputCat">Agregar Categoria: </label>
                <input 
                    className="inputCat" 
                    placeholder="Nombre de la categoria" 
                    type="text"
                    onChange={ inputChange }
                />
           </form>
        </>
     );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
 
 export default AddCategory;
