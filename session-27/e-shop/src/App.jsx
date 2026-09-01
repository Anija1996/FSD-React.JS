import { useState } from 'react'

import Navbar from './components/Navbar'
import Cart from './components/Cart'
import './App.css'

function App() {

  const products = [
    {
      id:1,
      name:"Samsung TV",
      price:750000,
      inStock:true
    },

    {
      id:2,
      name:"Sony TV",
      price:850000,
      inStock:true
    },

    {
      id:3,
      name:"LG TV",
      price:450000,
      inStock:false
    },
  ]

  return (
    <>
      <h1>e-Shop</h1>
      <Navbar />
      {
        products.map((product)=>(
          <Cart 
            key={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
          />
        ))
      }

      {/* <Cart name="Samsung TV" price={75000} inStock={true}/>
      <Cart name="LG TV" price={50000} inStock={false}/>
      <Cart name="Sony TV" price={85000} inStock={true}/> */}
    </>
  )
}

export default App
