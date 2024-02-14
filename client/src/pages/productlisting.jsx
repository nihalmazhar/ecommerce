import React from 'react'
import ProductCard from '../components/productCard/productCard'
function productlisting() {
  return (
    <div>
      <div>All Products</div>
      <div>
        <div className="mx-6 w-[25vw] border-gray-600 border rounded-lg">
          
          <ProductCard/>
          
        </div>
      </div>
    </div>
  )
}

export default productlisting