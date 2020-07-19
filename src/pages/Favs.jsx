import React from 'react'
import { useStateValue } from '../state'


const Favs = () =>{
    const [{user}, dispatch] = useStateValue()
  
    return(
        <h1>Favs</h1>
    )
}

export default Favs
