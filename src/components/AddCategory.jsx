import { useState } from 'react';

const AddCategory = ({ setCategories }) => {
  
    const [ inputValue, setInputValue ] =  useState('One Punch');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if ( inputValue.trim().length <= 1 ) return;

        setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
    }

    //  (event) => onSubmit(event) => onSubmit
    //  (event) => inputValue(event) => inputValue
    //  (event) => onInputChange(event) => onInputChange

    return (
        <form onSubmit = { onSubmit } >
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange = { onInputChange }
            />
        </form>
  )
}

export default AddCategory;