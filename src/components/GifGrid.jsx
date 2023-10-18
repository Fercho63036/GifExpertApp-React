
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category ); 

    return (
        <>
            <h3>{category}</h3>
            {/* Otra forma escrear otro componente*/}
            {/* <LoadingMessage isLoading={ isLoading } /> */}
            {
                isLoading && ( <h2> Cargando... </h2> )
            }

            <div className="card-grid" >
                {
                    images.map( ( image )=> (
                            <GifItem 
                                key={ image.id }
                                // title={image.title}
                                // url={ image.url }
                                { ...image }
                            />
                       ))}
            </div>
        </>
  )
}

export default GifGrid;