import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const GET_ITEM = gql`
query getSinglePhoto($id: ID!){
  photo(id: $id){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const useGetItem = (query) => {
  const { loading, error, data} = useQuery(GET_ITEM, {variables: { id: query.id}});
  return {loading, error, data}
}
