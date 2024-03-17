import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import Select from 'react-select';
function productAdd() {
  const baseURL = 'http://localhost:4000/api/items';

  const {register, handleSubmit, formState:{errors}} = useForm();

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const onSubmit = (data) => 
  {axios.post(baseURL, data)
    console.log(data)};

  return (
    <>
   <div className='productAddForm m-8'>
    <h2>Add New Product Details</h2>
    <form className='space-y-2' onSubmit={handleSubmit(onSubmit)}>
      <div >
        <label name='name' className='block'>Name*</label>
      <input type='text' name='name' id='name'  {...register('name')}placeholder='Enter Product Name' required/>
      </div>
      <div>
      <label name='price' className='block'>Price*</label>
      <input type='number' name='price' id='price' {...register('price')} placeholder='Enter Product Price' required/>
      </div>
      <div>
      <label name='cateogry' className='block'>Category*</label>
      <Select type='text' name='category' id='category' options={options}{...register('category')} placeholder='Enter Product category' required/>
      </div>
      <div>
      <label name='description' className='block'>Description*</label>
      <input type='text' name='description' id='description' {...register('description')} placeholder='Enter Product Description' required/>
      </div>
      <div className='flex space-x-1'>
        <div>
        <label name='images' className='block'>Images*</label>
        <input type='text' name='images' id='images' {...register('images.[0]')} placeholder='Enter Product image links'required/>
        </div>
        <div>
        <label name='images' className='block'>Images*</label>
        <input type='text' name='images' id='images' {...register('images.[1]')} placeholder='Enter Product image links'required/>
        </div>
        <div>
        <label name='images' className='block'>Images*</label>
        <input type='text' name='images' id='images' {...register('images.[2]')} placeholder='Enter Product image links'required/>
        </div>
        <div>
        <label name='images' className='block'>Images*</label>
        <input type='text' name='images' id='images' {...register('images.[3]')} placeholder='Enter Product image links' required/>
        </div>
      </div>
      <div>
      <label name='seller' className='block'>Seller*</label>
      <input type='text' name='seller' id='seller' {...register('seller')} placeholder='Enter Product Seller' required/>
      </div>
      <div>
      <label name='brand' className='block'>Brand*</label>
      <input type='text' name='brand' id='brand' {...register('brand')} placeholder='Enter Product Brand'required/>
      </div>
      <div>
      <label name='origin' className='block'>Origin*</label>
      <input type='text' name='origin' id='origin' {...register('origin')} placeholder='Enter Product Origin'required/>
      </div>
      <div>
      <label name='partNumber' className='block'>Part Number*</label>
      <input type='text' name='partNumber' id='partNumber' {...register('partNumber')} placeholder='Enter Product Part Number'required/>
      </div>
      <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Add product</button>
    </form>
   </div>
    </>
  )
}

export default productAdd

