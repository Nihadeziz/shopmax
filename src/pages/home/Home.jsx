import React from 'react'
import Layout from '../../components/layout/Layout'
import Products from './components/products/Products'
import { SectionOne } from './components/sectionOne/SectionOne'

const Home = () => {
  return (
    <>
    <Layout>
        <SectionOne/>
        <Products/>
    </Layout>
    </>
  )
}

export default Home