import React, { useState , useEffect} from 'react'
import ProductCard from '../components/productCard/productCard'
import {Link} from "react-router-dom"

import { useParams } from 'react-router-dom'
import axios from 'axios'


function productlistingFilter() {

  const [product, setProduct] = useState([]);
  const baseURL = 'http://localhost:4000/api/items';

  useEffect(() => {
    const fetchProducts = async() => {
      try {
        const response = await axios.get(baseURL);
        setProduct(response.data);
      }
      catch(err){console.log(err)};
    }
    fetchProducts();
  },
  
  []);
  
  const category = useParams();
  console.log(category);

  const selectedProduct = product.filter((item) =>  item.category.toLowerCase() === category.category.toLowerCase());
  console.log(selectedProduct)
  return (
    <div>
      <div>All Products</div>
      <div className='flex'>
        <div className='w-[20vw] h-screen mt-6 ml-4  rounded-md bg-blue-300 '>Filter</div>
        <div className='flex flex-wrap'>
        
            { selectedProduct && selectedProduct.map((item) => {
              
              return(
                
                  <div className="mx-6 my-6 w-[25vw] border-gray-600 border rounded-lg">
                              <ProductCard
                              productId={item._id}
                              firstImage = {item.images[0]}
                              productName = {item.name}
                              price = {item.price}
                              brand = {item.brand}
                              partNumber = {item.partNumber}
                               />
                               </div>
                
             )})}
        
        
        </div>
      </div>
    </div>
  )
}

export default productlistingFilter