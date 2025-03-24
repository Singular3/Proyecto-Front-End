import React from 'react'


import PaginaPrincipal from '../components/LandingPage'

import Header from '../components/Header'
import NavComponent from '../components/NavComponent'


function Home() {
  return (
    <div>

      <NavComponent/>
      
      <PaginaPrincipal />
      
      <Header />

     
      
    </div>
  )
}

export default Home
