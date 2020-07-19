import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'


const SIGNUP_MUTATION = gql`
  mutation signup($input: UserCredentials!){
    signup(input: $input)
  }
`

export const [ signup, {data, loading, error}] = useMutation(SIGNUP_MUTATION, {
  onCompleted() {
      dispatch({
          type: 'changeAuth',
          newIsAuth: { isAuth: true}
      })
  }       
})
