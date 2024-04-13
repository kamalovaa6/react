import { useState } from 'react'
import Header from '../Components/Header/Header'
import Slider from '../Components/Slider/Slider'
import Products from '../Components/Product/Product'

function HomePage() {
  return (
    <>
      <Slider></Slider>
        <Products></Products>
    </>
  )
}

export default HomePage
