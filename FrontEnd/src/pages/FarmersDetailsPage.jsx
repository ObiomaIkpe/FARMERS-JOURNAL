import { useState } from 'react';
import notification from '../images/notification.svg'

const FarmersDetailsPage = () => {
    const [todaysDate, setTodaysDate] = useState('');


    function TodaysDate  () {
        const moonLanding = new Date('July 20, 69 00:20:18')
        const today = moonLanding.getMonth();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        console.log(monthNames[today])
    }

  return (
    <div className='p-5'>
      <nav className='flex flex-row justify-between'>
        <div className=''>JN</div>
        <div><img src={notification} alt='notifications' /></div>
      </nav>

      <div className='flex flex-row '>
        <p>Date</p>
         <p>{new Date().getFullYear()}</p></div>
    </div>
  )
}

export default FarmersDetailsPage
