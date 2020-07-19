import gql from 'graphql-tag'

export const SIGNUP_MUTATION = gql`
  mutation signup($input: UserCredentials!){
    signup(input: $input)
  }
`

export const LOGIN_MUTATION = gql`
  mutation login($input: UserCredentials!){
    login(input: $input)
  }
`
