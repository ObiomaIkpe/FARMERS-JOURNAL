import React from 'react'

const StepCards = ({image, imagealt, smalltext, lasttext, stepnumber}) => {
  return (
    
<>
{/* farmer holding fruits, first image in the workflow. */}   
<div className='mx-auto w-[300px] pb-4 px-2'>     
<img 
className='w-[300px] md:w-auto' src={image} alt={imagealt} 
/>


      {/* personal details */}
<div className='bg-[#E4FF7A] p-3 '>
<h3 className='py-2 text-xl font-semibold'>{smalltext}</h3>
<h4 className='text-sm max-w-[290px]'>{lasttext}</h4>
</div>


</div>


<div className="w-[103px] h-[111px] mx-auto relative md:items-center justify-center gap-4 m-4">
<div className="w-[103px] h-[111px]  bg-lime-700 bg-opacity-20 rounded-full" />
<div className="w-[78px] h-[79px] left-[15px] top-[16px] absolute bg-lime-700 rounded-full" />
<div className="w-[17.17px] h-[47.09px] left-[40.58px] top-[23.55px] absolute text-white text-6xl font-medium font-['Inter']">{stepnumber}</div>
</div>

    
    </>
  )
}

export default StepCards
