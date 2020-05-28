import React from 'react'
import PhotoCard from '../PhotoCard/index'
import Loader from './../Loader/index'
import { useGetItem } from '../../Hooks/useGetItem'

const SinglePhotoCard = id => {   
   
    const {loading, error, data } = useGetItem(id) 
    if(loading) return <Loader loading />
    if(error) return <p>That's some bad hat Harry. {error.message}</p>
    
    const photoCard = data.photo
    return    <PhotoCard key={id} {...photoCard} />
}

export default SinglePhotoCard
