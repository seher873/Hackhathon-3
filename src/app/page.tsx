import React from 'react'
import HeroSection from './components/Hero'
import ProductsSection from './components/ProductsSection'
import Latest from '../app/components/latest'
import Shopics from './components/Shopics'
import TopCategory from './components/TopCatigory'
import Blog from './components/Blog'
import UniqueP from './components/UniquP'
import Trending from './components/Trending'
import Discount from './components/Discount'


function page() {
  return (
    <div>


       

      <HeroSection />
    <ProductsSection />
    <Latest />
      <Shopics />
      <UniqueP />
      <Trending />
      <Discount />
      <TopCategory />
      <Blog />
      
      
    </div>
  )
}

export default page