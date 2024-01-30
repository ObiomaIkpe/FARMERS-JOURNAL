import React from 'react'

const FarmersCropAndSoilDetails = ({data, setData}) => {
  return (
    <>
    <div className='flex flex-col border-2 border-yellow-200 rounded-[20px] pt-5 px-2'>
    <div className='flex flex-col pb-5 mb-5'>
            <label className="text-zinc-800 text-base font-normal font-['Inter']">Crop Name</label>
            <input
            type='text'
            onChange={(e) => setData({...data, cropname: e.target.value})}
            value={data.cropname} 
            className='bg-neutral-100 justify-start items-center inline-flex outline-none' placeholder='Eg. Pumpkin Leaf'
            id="cropname" />

        </div>

        <div className='flex flex-col pb-5 mb-5'>
            <label className="text-zinc-800 text-base font-normal font-['Inter']">Crop Type</label>
            <input
            type='text'
            onChange={(e) => setData({...data, croptype: e.target.value})}
            value={data.croptype} 
            className='bg-neutral-100 justify-start items-center inline-flex outline-none' placeholder='vegtable'
            id="croptype" />
            </div>
        </div>
        

        {/* div two */}
        <div className='flex flex-col border-2 border-yellow-200 rounded-[20px] pt-5 px-2 mb-5'>
            <label className="text-zinc-800 text-base font-normal font-['Inter']">Soil P.H</label>
            <input
            type='text'
            onChange={(e) => setData({...data, soilph: e.target.value})}
            value={data.soilph} 
            className='bg-neutral-100 justify-start items-center inline-flex outline-none' placeholder='Type Here'
            id="soilph" />

    

        <div className='flex flex-col pb-5 mb-5'>
            <label className="text-zinc-800 text-base font-normal font-['Inter']">Soil Temperature</label>
            <input
            type='text'
            onChange={(e) => setData({...data, soiltemperature: e.target.value})}
            value={data.soiltemperature} 
            className='bg-neutral-100 justify-start items-center inline-flex outline-none' placeholder='Type Here'
            id="soiltemperature" />

        </div>
        

        

        <div className='flex flex-col pb-5 mb-5'>
            <label className="text-zinc-800 text-base font-normal font-['Inter']">Soil Humidity</label>
            <input
            type='text'
            onChange={(e) => setData({...data, soilhumidity: e.target.value})}
            value={data.soilhumidity} 
            className='bg-neutral-100 justify-start items-center inline-flex outline-none' placeholder='Type Here'
            id="soilhumidity" />
</div>
        </div>  
    
    
    </>
  )
}

export default FarmersCropAndSoilDetails
