import React from 'react'

const Card = ({ name, value, description, navLink, className}) => {
  return (
        <div className={`bg-white p-4 shadow-md rounded-md flex flex-col gap-2 ${className}`}>
        <h1 className='text-[20px] font-semibold w-full'>{name}</h1>
        <h2 className='font-medium text-[48px] flex items-center gap-2 w-full'>{value}</h2>
        <p className="font-normal text-[14px] w-full">{description}</p>
        <a href="" className="text-dark_orange text-[14px] mt-16 flex items-center gap-2 w-full">{navLink}</a>
    </div>
  )
}

export default Card