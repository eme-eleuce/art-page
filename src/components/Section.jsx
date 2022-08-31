import React from 'react';
import { Link } from 'react-router-dom';
import Foto1 from '../components/fotos/depe.png';
import Foto2 from '../components/fotos/pc.jpg';
import Foto3 from '../components/fotos/oj.jpg';
import Foto4 from '../components/fotos/hand.jpg';
import { motion, useAnimation } from 'framer-motion';

const Section = () => {
  return (
    <div className='relative items-center justify-center h-screen  text-[#E9E9EB]'>
  <div className=" px-4 py-5 sm:px-6 lg:px-8 mt-[1rem]">
    <div
      className="grid grid-cols-1 lg:grid-cols-2  lg:gap-x-5 lg:items-center"
    >
      <div className="  text-center lg:text-left lg:mx-0  md:mt-[0rem] lg:mt-[0rem] p-3 lg:p-4">
      <motion.div
       initial={{ opacity: 0, y: 10 }}
       whileInView={{ opacity: 8, y: 0 }}
       transition={{duration: 1, delay: 0}}>
        <h2 className=" p-1 text-3xl font-bold lg:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-orange-500 via-purple-500 to-cyan-500 animate-text">
        choose your path carefully
            </h2>
           </motion.div>
           <motion.div
       initial={{ opacity: 0, x: 12 }}
       whileInView={{ opacity: 8, x: 0 }}
       transition={{duration: 1, delay: 1}}>
        <p className="mt-4 hidden lg:flex text-xl">
        everyone has different purposes in life, maybe you need some time to think about your next move. Enjoy the process, you can always come back anytime.
          
        </p>
           </motion.div>
        
      </div>

      <div className="grid  gap-3 lg:grid-cols-2 text-center">
        
        
<Link to='/path1'>

        <a
          className="block overflow-hidden lg:p-0   rounded-xl "
          
        >
          <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 10 }}
       transition={{duration: 3, delay: 0}}>
          <div className=''>
           <img className='object-fill h-[22.1rem] w-[22.1rem] rounded-xl' src={Foto1} alt="" />
           </div>
           </motion.div>
        </a>

</Link>
        
 <Link to='/path3'>
    
        <a
          className="block overflow-hidden lg:p-0   rounded-xl "
         
        >
            <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 10 }}
       transition={{duration: 3, delay: 0}}>
          <div className=''>
            {/* ig - super___freak */}
           <img className='object-fill h-[22.1rem] w-[22rem] rounded-xl' src={Foto4} alt="" />
           </div>
           </motion.div>
        </a>

</Link>       

<Link to='/path4'> 

        <div
          className=" overflow-hidden lg:p-0   rounded-xl col-span-1"
          
        >
          <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 10 }}
       transition={{duration: 3, delay: 0}}>
          <div className=''>
            {/* ig - super___freak */}
           <img className='object-fill h-[22.1rem] w-[22rem] rounded-xl' src={Foto3} alt="" />
           </div>
           </motion.div>
        </div>

</Link>

       
      </div>
    </div>
  </div>
</div>
  )
}

export default Section