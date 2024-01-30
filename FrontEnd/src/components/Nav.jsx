import React from 'react'
import hamburger from '../images/hamburger.svg'
import Union from '../images/Union.svg';
import notification from '../images/notification.svg'





const Nav = () => {
  return (
    <nav className='flex flex-row justify-between p-3 items-center'>
        <div className='flex flex-col'>
            <img src={Union} alt='farm logo'/> 
        </div>

        <div className='flex flex-row gap-2 items-center justify-center'>
        <img src={notification} alt='notification icon'/> 
        <img src={hamburger} alt='hamburger menu'/> 
        </div>  
        
    </nav>
  )
}

export default Nav
