import React from 'react'
import {Link, Image} from './styles'

const DEFAULT_IMAGE = 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg'

const Category = ({cover = DEFAULT_IMAGE, path, emoji = '?' }) =>{
    return(
       <Link to={path}>
           <Image src={cover} />
    <p>{emoji}</p>
       </Link>
    )
}

export default Category
