import React from 'react'
import AddtoCart from './AddtoCart'
// import styles from './ProductCard.module.css'

const ProductCard = () => {

  return (
    <div className= "p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500 rounded-lg">
        <AddtoCart />
    </div>
  )
}

export default ProductCard