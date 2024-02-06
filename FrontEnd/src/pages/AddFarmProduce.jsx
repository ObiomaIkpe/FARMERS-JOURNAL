import React, { useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6'

const AddFarmProduce = () => {
    const [farmProduce, setFarmProduce] = useState([])

    const addProducts = () => {
        
    } 

  return (
   

    <div className='p-3 max-w-lg mx-auto items-center justify-center '>
      <h1 className='text-center text-sm'>Add Products</h1>
    <form className='flex flex-col'>

    <div className='relative'>
      <input 
      className='border-lime-700 border-2 py-2  w-full outline-none rounded-lg' 
      placeholder='product type. Eg.Poultry Eggs, vegetables, yams...' 
      type='' 
      id='username'
      required
       />

<div className='absolute top-3 right-3'><FaCirclePlus /> </div>
    </div>
    


    <div>
      <input 
      className='border-lime-700 border-2 py-2 my-2 w-full outline-none rounded-lg' 
      placeholder='quantiy produced' 
      type='text' 
      id='username'
       />
    </div>

      <button className='max-w-full bg-neutral-800 text-white'>submit</button>

</form>
    </div>

    


            
  )
}

export default AddFarmProduce
