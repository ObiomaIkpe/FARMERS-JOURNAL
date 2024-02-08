import React, { useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6';
import { MdDelete } from "react-icons/md";


const AddFarmProduce = () => {
    const [farmProduce, setFarmProduce] = useState([]);
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');

  
    // start of array management functions  
    const handleAddFarmProduce = () => {
        const newProduct = {
          product: product,
          quantity: quantity
        }
        console.log(newProduct)
        setFarmProduce(farmP => [...farmP, newProduct])
        console.log(farmProduce)
        
    }
    
    const prods = farmProduce;

    const handleRemoveFarmProduce = (index) => {
    
    }
    //end of array management functions

    

  return ( 

<>
  <div className='max-w-lg mx-auto p-3 flex flex-col items-center justify-center'>

  <h2 className='mx-auto mb-4'>Add farm products</h2>
      <form className='flex flex-col mt-8'>


        <div className='flex flex-col my-4'>
      <label className="text-zinc-800 text-base font- font-['Inter']">Farm Product</label>
            <input
            type='text' 
             onChange={(e) => setProduct( e.target.value)}
            className='bg-neutral-100 justify-start items-center inline-flex outline-none' placeholder='Eg. Yams'
            id="" />
        </div>

        <div className='flex flex-col my-4'>
      <label className="text-zinc-800 text-base font-normal font-['Inter']">Quantity Produced</label>
            <input
            type='text'   
            onChange={(e) => setQuantity( e.target.value)}
            className='bg-neutral-100 justify-start items-center inline-flex outline-none' placeholder='Eg. 500 tubers'
            id="" />
        </div>

        <button onClick={handleAddFarmProduce}
        type='button'
        className='w-full bg-lime-700 p-3 mt-8 rounded-lg'>
          Add products
        </button>
        
        {
          farmProduce.map((item, index) => (
            <div key={index} className='flex flex-row items-center justify-center gap-4 w-full'>
              <div>prod: {item.product}</div> <br /> <br />
              <div>quantity: {item.quantity}</div>
              <MdDelete size={40} onClick={(index) => handleRemoveFarmProduce()}/>
            </div>
          ))
        }
      
      </form>




  
  </div>

</>

    


            
  )
}

export default AddFarmProduce
