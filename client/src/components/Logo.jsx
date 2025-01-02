import React from 'react'
import { Link } from 'react-router-dom'

function Logo({type}) {
  return (
    <div className=''>
    <Link
     to='/' className={`text-2xl font-semibold dark:text-white ${type && "text-white text-4xl"}`}>
   BLOG
   <span className={`text-3xl text-rose-500${type && "text-5xl font-bold"}`}>Wave</span>
   </Link>
  
</div>
  )
}

export default Logo
