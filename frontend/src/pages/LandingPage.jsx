import React from 'react'
import Navbar from '../components/Navbar'
import ItemsDisplay from '../components/ItemsDisplay'
import Chains from '../components/Chains'
import FirmCollections from '../components/FirmCollections'
import ProductMenu from '../components/ProductMenu'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <div className="landingSection">
        <ItemsDisplay />
        <Chains />
        <FirmCollections />
        <ProductMenu />
        </div>
    </div>
  )
}

export default LandingPage