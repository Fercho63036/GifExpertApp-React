import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Naruto' ]);

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;

        // setCategories (cat => [ ...cat, 'Valorant' ] ); //Otra forma de insertar
        setCategories([ newCategory, ...categories ]); // Insertar al final
        // setCategories(['Valorant', ...categories]); // Insertar al inicio
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories = { setCategories }
                onNewCategory = { event => onAddCategory(event) }
            />

            {/* Listado de Gif */}

            {
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category }
                        category={ category } />
                ))
            }

                {/* <li>ABC</li> */}

                {/* Gif Item */}

        </>
    )
}
