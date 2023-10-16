import { useState } from 'react';
// import AddCategory from './components/AddCategory';
import AddCategory from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Naruto' ]);

    const onAddCategory = () => {
        // setCategories (cat => [ ...cat, 'Valorant' ] ); //Otra forma de insertar
        setCategories([...categories, setCategories]); // Insertar al final
        // setCategories(['Valorant', ...categories]); // Insertar al inicio
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory setCategories = { setCategories }/>

            {/* Listado de Gif */}
            <ol>
                { categories.map( category => {
                        return <li key={ category } >{ category }</li>
                    })
                }
                {/* <li>ABC</li> */}
            </ol>
                {/* Gif Item */}

        </>
    )
}
