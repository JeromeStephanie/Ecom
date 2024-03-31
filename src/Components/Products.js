import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({ products }) => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
          shopping everyday
        </h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut Lorem
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor
        </p>
      </div>
      <div className='max-w-screen-xl products mx-24 py-10 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-10'>
        {products.map(item => {
          return <ProductsCard key={item.id} product={item} />
        })}
      </div>
    </div>
  )
}

export default Products
