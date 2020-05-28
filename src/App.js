import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import Logo from './assets/logo.svg'
import SinglePhotoCard from './components/SinglePhotoCard'
import Home from './pages/Home'
import { Router, Link } from '@reach/router'


const App = () =>{
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  
  return (
    <> 
      <Link to={'/'}>
        <img src={Logo} alt="" style={{ width: '250px', marginLeft: '-25px'}}/>
      </Link>
      <GlobalStyle />
      {
        detailId 
        ? <SinglePhotoCard id={detailId} /> 
        : 
        <Router>
          <Home path='/' />
          <Home path='/pet/:id' />
        </Router>
      }
    </>
  )
} 

export default App

