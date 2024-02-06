
import Nav from '../components/Nav';
import StepCards from './StepCards';
import { FaCirclePlus } from "react-icons/fa6";


import { Link } from 'react-router-dom';


const Home = () => {

  
  return (
    <div className='mx-auto'>
      <Nav />

      {/* thhe header section. Cherries background */}
      <div 
      className="bg-cover mx-auto p-6 relative flex flex-col justify-center h-[70vh]"
      style={{backgroundImage:"url('../../src/images/cherryBackground.png')",}}>
    <div className="uppercase text-[#1E1E1E] pb-5  text-xl font-semibold font-['Inter']">Welcome to the future of agriculture!</div>
        
        <div className=" text-stone-900 pb-4 text-xl font-medium font-['Inter']">Discover the cutting-edge world  of agriculture where technology meets sustainibilty.our mission is to revolutinze farming for a brighter tommorow.</div>
        
        <div className="text-stone-900 text-sm font-medium font-['Inter'] ">Sow smart, reap big, elevate your farming experience
        <br />

           <Link to='/form'>
           <button className='m-2 p-3 mx-auto bg-green-600 absolute left-5 bottom-0 rounded-lg mb-5 sm'>Register a farmer</button>
           </Link>

           </div>    
      </div>

      <div className='flex flex-row items-center justify-center gap-4 p-5 bg-grey-600'>
        <Link to='/add-farm-produce' className='flex flex-row gap-4 items-center justify-center'>
      <p className='gap-4 uppercase'>Add farm products</p>
      <span><FaCirclePlus size={28} color='#4d7c0f'/></span>
        </Link>
    </div>

{/* How it works section */}
      <div className='bg-yellow-100 mx-auto'>
        {/* How it works. */}
      <div className="text-center py-6"><span className="text-stone-900 text-xl font-semibold font-['Inter']">How it</span><span className="text-lime-700 text-xl font-semibold font-['Inter']"> works</span></div>

    

      {/* Images in the workflow */}
      <div className=' flex flex-col lg:flex-row '> 
        <StepCards 
        image="../../src/images/farmerHoldingFruits.png"
        imagealt="farmer holding fruits."
        smalltext="Enable location access"
        lasttext="Enable location access"
        stepnumber="1"
        />

        {/* farmer holding vegetables, second image in the workflow */}


        <StepCards 
        image="../../src/images/farmerHoldingVegetables.png"
        imagealt="farmer holding vegetables"
        smalltext="Enable location access"
        lasttext="Input your location details and grant permission to access your location"
        stepnumber="2"
        />

        



<StepCards 
        image="../../src/images/farmerTakingRecords.png"
        imagealt="farmer taking records"
        smalltext="Input the details of your crops."
        lasttext="Input the details of your crops."
        stepnumber="3"
        />


          
          
   </div>    
  </div>
  
</div>

    
    
  )
}

export default Home
