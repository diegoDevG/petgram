import React from 'react'
import { Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const FavButton = ({like, likes, onClick}) => {
    const Icon  = like ? MdFavorite : MdFavoriteBorder
    return (
        <Button onClick={onClick}>
            <Icon size='32px' /> {likes} likes!
        </Button> 
    )
}

export default FavButton
