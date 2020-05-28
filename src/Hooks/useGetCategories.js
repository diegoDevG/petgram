import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const GET_PHOTOS = gql`
query getPhotos($categoryId: ID){
    photos(categoryId: $categoryId){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetCategories = (query) => {
  const { loading, error, data} = useQuery(GET_PHOTOS, {variables: { categoryId: query.categoryId}});
  return {loading, error, data}
}
