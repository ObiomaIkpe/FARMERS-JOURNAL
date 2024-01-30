import "react-step-progress-bar/styles.css";
import { useState } from 'react';
import FarmersPersonalDetails from './FarmersPersonalDetails';
import FarmersDetailsPlusLocation from './FarmersDetailsPlusLocation';
import FarmersCropAndSoilDetails from './FarmersCropAndSoilDetails';
import LastStep from './LastStep';
import axios from 'axios';


const FormTitle = () => {

    const [page, setPage] = useState(0);
    const [data, setData] = useState({
        cropname: '',
        croptype: '',
        email: '',
        fullname: '',
        location: '',
        phonenumber: '',
        soilhumidity: '',
        soilph: '',
        soiltemperature: ''
    });
    console.log(data)

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:4100/register',
            {
                method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
            })
            const data2 = await res.json();
            console.log(data2)
        } catch (error) {
            console.log(error);
        }
    }

    const titles = ["You are almost there, let’s get a few details about you",
    "You are almost there, let’s get a few details about you and your location",
    "You are almost there, let’s get a few details about your crops and your soil",
    "You are almost there, let’s go!"]

    const pageDisplay = () => {
        if (page == 0){
            return <FarmersPersonalDetails data={data} setData={setData} />
        } else if (page == 1) {
            return <FarmersDetailsPlusLocation data={data} setData={setData}/>
        } else if (page == 2){
            return <FarmersCropAndSoilDetails data={data} setData={setData}/>
        } else{
            return <LastStep data={data} setData={setData}/>
        }
    }




  return (

    
    <div className='mx-auto flex flex-col'>
      <h2 className="text-center">{titles[page]}</h2>
      <div className=''>

      <div className='flex flex-row justify-around items-center'>

      <div className='relative flex flex-row text-white-700'>
            <div className={`rounded-full transition  duration-500 ease-in-out border-2 border-yellow-200 h-12 w-12 flex items-center justify-center py-3 ${page !== 0 ? ('bg-lime-700' ): ('bg-gray-700')}`}>{page !== 0 ? ( 1 ): (<span>&#10003;</span>)}
            </div>                  
          </div>
          <div className='flex-auto border-t-2'></div>

          <div className='relative flex flex-row text-white-700'>
            <div className={`rounded-full transition  duration-500 ease-in-out border-2 border-yellow-200 h-12 w-12 flex items-center justify-center py-3 ${page !== 1 ? ('bg-lime-700' ): 'bg-gray-700'}`}>{page !== 1 ? ( 2 ): (<span>&#10003;</span>)}
            </div>                  
          </div>
          <div className='flex-auto border-t-2'></div>
    
          <div className='relative flex flex-row text-white-700'>
            <div className={`rounded-full transition  duration-500 ease-in-out border-2 border-yellow-200 h-12 w-12 flex items-center justify-center py-3 ${page !== 2 ? ('bg-lime-700' ): 'bg-gray-700'}`}>{page !== 2 ? ( <span>3</span> ): (<span>&#10003;</span>)}
            </div>                  
          </div>
          <div className='flex-auto border-t-2'></div>

          <div className='relative flex flex-row text-white-700'>
            <div className={`rounded-full transition  duration-500 ease-in-out border-2 border-yellow-200 h-12 w-12 flex items-center justify-center py-3 ${page !== 3 ? ('bg-lime-700' ): 'bg-lime-700'}`}>{page !== 3 ? ( <span>4</span> ): (<span>&#10003;</span>)}
            </div>                  
          </div>
          <div className='flex-auto border-t-2'></div>

      </div>


            {/*  logic*/}
        <div className=''>

{/* page display */}
<div className=''>
    {pageDisplay()}
    </div>


        

    

    <div className='flex flex-row justify-between p-5'>
        <button 
            disabled={page == 0}
            onClick={() => {
                console.log('clicked')
            setPage((currPage) => currPage - 1)
            }}
        className='flex justify-between bg-green-600 rounded-[20px] px-6 py-3'>prev</button>
        <button
        
        onClick={(e) => {
            if(page == titles.length - 1){
                console.log('end')
                alert('form submitted') 
                registerUser(e);
            } else {
                console.log('forward')
                setPage((currPage) => currPage + 1)
            }
        }}
        className='flex justify-between bg-green-600 rounded-[20px] px-6 py-3'>
            {page === titles.length - 1 ? "submit" : "next"}
        </button>
    </div>
    
</div>
</div>
</div>
        
    
    

      

  )
}

export default FormTitle
