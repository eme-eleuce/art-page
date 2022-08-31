import React from 'react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  return (
   
    <div className='flex items-center justify-center h-screen bg-cover bg-center bg-fixed '>
    <div  className='flex top-0 left-0 right-0 bottom-0  z-[2]'/>
    <Spline scene="https://draft.spline.design/5xdvHPY0VtfcSTJa/scene.splinecode" className='absolute'/>
    <div className='p-5 text-[#E9E9EB] z-[2] md:ml-[1rem] ml-0  text-center'>

       <p className='text-3xl lg:text-5xl cursor-pointer'>
       <motion.div
       initial={{ opacity: 0, y: 10 }}
       whileInView={{ opacity: 8, y: 0 }}
       transition={{duration: 1, delay: 3}}>
       <Link to='/section' className='p-4 text-[#E9E9EB]'>Start</Link>
       </motion.div>
         </p>
         
        </div>
</div>
  )
}

export default Hero