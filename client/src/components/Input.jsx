import React from 'react'

function Input({label,name,type,isRequered, placeholder,value,onChange}) {
  return (
    <div className=' w-f flex flex-col gap-1'>
        <label htmlFor="email" className='text-slate-900 dark:text-gray-500'>{label}</label>
        <input type={type} 
        name={name}
        required={isRequered}
        className='dar; bg-transparent appearance-none block w-full px-3 py-2.5  2xl:py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-300
        dark:placeholder-gray-300 text-gray-900 dark:text-white rounded-md focus:outline-none focus:right bg-indigo-500
        focus:border-indigo-500 focus:z-10 text-base'
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
      
    </div>
  )
}

export default Input
