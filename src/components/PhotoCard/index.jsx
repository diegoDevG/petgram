import React, { useState, useEffect, useRef } from 'react'
import { Article, ImageWrapper, Img, Button } from './styles'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useNearScreen } from './../../Hooks/useNearScreen'
import FavButton from '../FavButton'
import { ToggleLikeMutation } from './../../containers/ToggleLikeMutation';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const PhotoCard = ({id, likes=0, src= DEFAULT_IMAGE}) =>{
    const key = `like-${id}`
    const [like, setLike] = useLocalStorage(key, false)
    const [showItem, element] = useNearScreen()   
   
    return(
        <Article ref={element}>
            {
                showItem && 
                <>
                    <a href={`/?detail=${id}`}>
                        <ImageWrapper>
                            <Img src={src} alt=""/>
                        </ImageWrapper>
                    </a>
                    <ToggleLikeMutation>
                        {
                            (toggleLike) => {                             
                                const handleFavClick = () => {
                                    !like && toggleLike({variables: {input: {id}}})
                                    setLike(!like)
                                }
                                return (

                                    <FavButton like={like} likes={likes} onClick={handleFavClick} />            
                                    )
                            }
                        }
                    </ToggleLikeMutation>
                </>
            }
        </Article>
    )
}

export default PhotoCard
