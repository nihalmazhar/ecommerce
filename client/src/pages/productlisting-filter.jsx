import React, { useState , useEffect} from 'react'
import ProductCard from '../components/productCard/productCard'
import {Link, useParams} from "react-router-dom"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faFilter} from '@fortawesome/free-solid-svg-icons'

function productlistingFilter() {

  const selectedCategory = useParams();
  console.log( 'this is',selectedCategory)
  const [product, setProduct] = useState([]);

  const [sortOrder, setSortOrder] = useState("ascending");

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedOrigins, setSelectedOrigins] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleBrandCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedBrands([...selectedBrands, value]);
    } else {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== value));
    }
  };

  const handleOriginCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOrigins([...selectedOrigins, value]);
    } else {
      setSelectedOrigins(selectedOrigins.filter((origin) => origin !== value));
    }
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  }

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  }

  const applyFilters = () => {
    // Apply filters based on selectedBrands and selectedOrigins
    // Filter products based on the selected options
    let filteredProducts = product.filter((item) => {
      if (selectedBrands.length > 0 && !selectedBrands.includes(item.brand)) {
        return false;
      }
      if (
        selectedOrigins.length > 0 &&
        !selectedOrigins.includes(item.origin)
      ) {
        return false;
      }

      if (item.price < Number(minPrice)){
        return false;
      }

      if (item.price > Number(maxPrice)){
        return false;
      }
      return true;
    });
    setProduct(filteredProducts);
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedOrigins([]);
    fetchProducts();
  };
  const baseURL = 'http://localhost:4000/api/items';

  const fetchProducts = async() => {
    try {
      const response = await axios.get(baseURL);
      const responsess = response.data
      const selectedProduct = responsess.filter((item) =>  item.category.toLowerCase() === selectedCategory.category.toLowerCase());
      setProduct(selectedProduct);
    }
    catch(err){console.log(err)};
  }

  useEffect(() => {
    fetchProducts();
  },
  
  []);
  
  const sortByPrice = () => {
    const sortedProducts = [...product];
    sortedProducts.sort((a, b) => {
      if (sortOrder == "ascending") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setProduct(sortedProducts);
    setSortOrder(sortOrder == "ascending" ? "descending" : "ascending");
  };

  const categoryItems = [...new Set(product.map((Val) => Val.category))];
  const brandItems = [...new Set(product.map((Val) => Val.brand))];
  const originItems = [...new Set(product.map((Val) => Val.origin))];
  console.log(categoryItems);

  return (
    <div>
      <div className="flex">
        <div className="w-[15vw] h-screen mt-6 ml-4  rounded-sm bg-blue-300 flex flex-col p-2  ">
          <div className="my-2 border-b-2 border-blue-900 h-min w-full font-medium text-blue-900">
            Filter <FontAwesomeIcon icon={faFilter} />
          </div>

          <div className="my-2 font-medium text-blue-900">
            <div className="underline">Brand</div>
            {brandItems &&
              brandItems.map((brand) => {
                return (
                  <div className="text-xs">
                    {" "}
                    <input
                      type="checkbox"
                      id={brand}
                      value={brand}
                      onChange={handleBrandCheckboxChange}
                      className="mr-1"
                    />
                    <label htmlFor={brand}>
                      {brand.length > 15
                        ? brand.slice(0, 6) + "..." + brand.slice(-6)
                        : brand}
                    </label>
                  </div>
                );
              })}
          </div>

          <div className="my-2 font-medium text-blue-900">
            <div className="underline">Origin</div>
            {originItems &&
              originItems.map((origin) => {
                return (
                  <div className="text-xs">
                    <input
                      type="checkbox"
                      id={origin}
                      value={origin}
                      onChange={handleOriginCheckboxChange}
                      className="mr-1"
                    />
                    <label htmlFor={origin}>
                      {origin.length > 15
                        ? origin.slice(0, 6) + "..." + origin.slice(-6)
                        : origin}
                    </label>
                  </div>
                );
              })}
          </div>
          <div className="my-2 font-medium text-blue-900">
            <div className="underline">Price</div>
            <div className="flex flex-col w-28 items-center">
              <input
                className="w-28 h-8 rounded-md"
                type="number"
                placeholder="Min"
              />{" "}
              to{" "}
              <input
                className="w-28 h-8 rounded-md"
                type="number"
                placeholder="Max"
              />
            </div>
          </div>

          <button
            onClick={applyFilters}
            className="bg-blue-700 text-white hover:bg-blue-900 rounded-md py-1 mx-2 shadow-sm"
          >
            Apply filters
          </button>
          <button
            onClick={clearFilters}
            className="bg-white text-blue-700 hover:bg-slate-300 rounded-md py-1 mx-2 my-4 shadow-sm"
          >
            Clear Filters
          </button>
        </div>
        <div className="flex flex-col w-[85vw]">
          <div className="  bg-blue-300  mx-6 mt-6 mr-[3rem] flex justify-end items-center p-2 rounded-sm font-medium text-blue-900 hover:text-blue-600">
            Sort{" "}
            <button onClick={sortByPrice}>
              <FontAwesomeIcon icon={faSort} className="mx-2" size="xl" />
            </button>
          </div>
          <div className="flex flex-wrap">
            {product.map((item) => {
              return (
                <div className="mx-4 my-6 w-[25vw] border-gray-600 border rounded-lg">
                  <ProductCard
                    productId={item._id}
                    firstImage={item.images[0]}
                    productName={item.name}
                    price={item.price}
                    brand={item.brand}
                    partNumber={item.partNumber}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


export default productlistingFilter