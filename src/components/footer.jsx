import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-500   mt-10">
    <div
      className="relative max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8 lg:pt-14"
    >
    
  
      <div className="lg:flex lg:items-end lg:justify-between">
        <div>
          
  
          <p
            className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500  md:text-md"
          >
            this project was created with the intention of showing images in different topics and/or situations. 
          </p>
        </div>
  
        <nav className="mt-12 lg:mt-0" >
         
  
          <ul
            className="flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12"
          >
            <Link to='/'>
            <li>
              <a className="text-gray-500 transition hover:text-gray-700/75" href="/">
                Home
              </a>
            </li>
            </Link>
            
            <li>
              <a className="text-gray-500 transition hover:text-gray-700/75" href="/">
                About
              </a>
            </li>
            
           
  
          </ul>
        </nav>
      </div>
  
      <p className="mt-12 text-sm text-center text-gray-400 lg:text-right">
        Copyright &copy; 2022. All rights reserved.
      </p>
    </div>
  </div>
  
  )
}

export default Footer