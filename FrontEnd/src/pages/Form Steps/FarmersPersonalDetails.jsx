import React from 'react'

const FarmersPersonalDetails = ({data, setData}) => {

    
  return (
    
      <>
        <div className='flex flex-col border-2 border-yellow-200 rounded-[20px] pt-5 px-2'>

        <div className='flex flex-col pb-5 mb-5'>
            <label className="text-zinc-800 text-base font-normal font-['Inter']">Full name</label>
            <input 
            type='text'
            onChange={(e) => setData({...data, fullname: e.target.value})}
            value={data.fullname}
            className='bg-neutral-100 justify-start items-center inline-flex outline-none' placeholder='Eg. Okeke Ahmed Wale'
            id="fullname" />
        </div>

        <div className='flex flex-col pb-5 mb-5'>
            <label className="text-zinc-800 text-base font-normal font-['Inter']">Email</label>
            <input 
            type='text'
            onChange={(e) => setData({...data, email: e.target.value})}
            value={data.email}
            className='bg-neutral-100 justify-start items-center inline-flex outline-none' placeholder='Youremail@gmail.com'
            id="email" />
        </div>

        <div className='flex flex-col pb-5 mb-5'>
            <label className="text-zinc-800 text-base font-normal font-['Inter']">Phone Number</label>
            <input
            type='text'
            onChange={(e) => setData({...data, phonenumber: e.target.value})}
            value={data.phonenumber}
            className='bg-neutral-100 justify-start items-center inline-flex outline-none' placeholder='09067734893'
            id="phonenumber" />
        </div>
        </div>
        </>
    
  )
}

export default FarmersPersonalDetails
