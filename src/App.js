import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import Logo from './assets/logo.svg'
import Home from './pages/Home'
import { Router, Link } from '@reach/router'
import Detail from './pages/Detail'
import NavBar from './components/NavBar/NavBar';


const App = () =>{

  return (
    <> 
      <Link to={'/'}>
        <img src={Logo} alt="" style={{ width: '250px', marginLeft: '-25px'}}/>
      </Link>
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' /> 
      </Router>
      <NavBar />
    </>
  )
} 

export default App

