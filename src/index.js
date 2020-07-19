import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo' 
import App from './App'
import { StateProvider, initialState, reducer } from './state';

const client = new ApolloClient({
  uri: 'https://petgram-server-diego.diegocardenas.now.sh/graphql'
})


ReactDOM.render( 
    <ApolloProvider client={client}>
      <StateProvider initialState={initialState} reducer={reducer}> 
        <App />
      </StateProvider>
    </ApolloProvider>  
  , document.getElementById('app'))
