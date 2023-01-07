import React from 'react'
import Ads from '../Components/Ads/Ads'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import HeaderMenu from '../Components/HeaderMenu/HeaderMenu'
import Products from '../Components/Products/Products'

function Home() {
  return (
   <div>
    <Header/>
    <HeaderMenu/>
    <Banner/>
    <Ads/>
    <Products/>
    <Ads/>
    <Footer/>
   </div>
  )
}

export default Home