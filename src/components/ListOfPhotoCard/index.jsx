import React from 'react'
import PhotoCard from '../PhotoCard/index'
import Loader from './../Loader/index'
import { useGetCategories } from './../../Hooks/useGetCategories';



const ListOfPhotoCard = categoryId => {   
    const {loading, error, data } = useGetCategories(categoryId) 
    if(loading) return <Loader loagind />
    if(error) return <p>Ups, That's some bad hat Harry. Error: {error.message}</p>

    return(
        <ul>
            {data.photos.map((photoCard, id) =>             
                <PhotoCard key={id} {...photoCard} />
            )}
        </ul>
    )
}

export default ListOfPhotoCard
