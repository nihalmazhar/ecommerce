import React, { useState , useEffect} from 'react'
import ProductCard from '../components/productCard/productCard'
import {Link} from "react-router-dom"
import axios from 'axios'


function productlisting() {

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
  
  
  return (
    <div>
      <div>All Products</div>
      <div className='flex'>
        <div className='w-[20vw] h-screen mt-6 ml-4  rounded-md bg-blue-300 '>Filter</div>
        <div className='flex flex-col'>
          <div className='bg-blue-300 mx-6 mt-6 mr-20'>SORT</div>
          <div className='flex flex-wrap'>
          
              {product.map((item) => {
          
                return(
                  <Link key={item._id} to={`/product-details/${item._id}`} >
                    <div className="mx-6 my-6 w-[25vw] border-gray-600 border rounded-lg">
                                <ProductCard
                                firstImage = {item.images[0]}
                                productName = {item.name}
                                price = {item.price}
                                brand = {item.brand}
                                partNumber = {item.partNumber}
                                 />
                                 </div>
                  </Link>
               )})}
          
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default productlisting