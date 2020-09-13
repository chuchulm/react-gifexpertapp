import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GitGridItem } from './GitGridItem';
// import { GetGifs } from '../helpers/Getgifs';

export const GifGrid = ({category}) => {

//     const [images, setImages] = useState( [] );

    const { data:images, loading } = useFetchGifs( category );

         console.log(loading)
         console.log(images)






    
    return (
        <>
        <h3 className=" animate__animated animate__fadeIn animate__delay-2s">{ category }</h3>
   
           {loading && <p className=" animate__animated animate__flash">loading</p> }

        <div className="card-grid">
           
            
                    {
                      
                      images.map( img =>(
                           
                      <GitGridItem key={img.id}  { ...img }/>
                              

                      ))
                     
                     }
               
                
            
        </div>
        </>
    )
}
