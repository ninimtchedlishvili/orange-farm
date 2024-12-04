import React from 'react'
import Logo from '../../Icon/Logo'
import Search from '../../Icon/Search'

const Header = () => {
  return (

    <div className='py-[16px] '>
        <Logo />
        <div className='pt-[16px] '>
        <input type="text" placeholder='Search' className='rounded-full px-4 ' />

        </div>
    </div>
  )
}

export default Header