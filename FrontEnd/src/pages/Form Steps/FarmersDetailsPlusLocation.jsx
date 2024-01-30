import React from 'react'

const FarmersDetailsPlusLocation = ({data, setData}) => {
  return (
    <>
    <div className='flex flex-col border-2 border-yellow-200 rounded-[20px] pt-5 px-2'>

      <div className='flex flex-col pb-5 mb-5'>
            <label className="text-zinc-800 text-base font-normal font-['Inter']">Location</label>
            <input
            type='text'
            onChange={(e) => setData({...data, location: e.target.value})}
            value={data.location}
            className='bg-neutral-100 justify-start items-center inline-flex outline-none' placeholder='Abuja'
            id="location" />
        </div>
      </div>
    </>
  )
}

export default FarmersDetailsPlusLocation
