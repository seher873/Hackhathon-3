import React from 'react'
import Header from './components/Header'
import HeroSection from './components/Hero'
import ProductsSection from './components/ProductsSection'
import Latest from '../app/components/latest'
import Shopics from './components/Shopics'
import TopCategory from './components/TopCatigory'
import Blog from './components/Blog'
import UniqueP from './components/UniquP'
import Link from 'next/link'

function page() {
  return (
    <div>

      <HeroSection />
    <ProductsSection />
    <Latest />
      <Shopics />
      <UniqueP />
      <TopCategory />
      <Blog />
    </div>
  )
}

export default page