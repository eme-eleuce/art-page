import React, {useEffect} from 'react'
import PhotoTemplate from '../photoTemplate';
import Foto1 from '../fotos/depe.png';
import Foto2 from '../fotos/bit.jpg';
import Foto3 from '../fotos/mi.jpg';
import Foto4 from '../fotos/coco.jpg';
import Foto5 from '../fotos/l.jpg';
import Foto6 from '../fotos/rana.jpg';
import Foto7 from '../fotos/wizard.jpg';
import Foto8 from '../fotos/tv.jpg';
import Foto9 from '../fotos/fight1.jpg';
import Foto10 from '../fotos/open.jpg';
import Foto11 from '../fotos/covid.jpg';
import Footer from '../footer';
import { motion, useAnimation } from 'framer-motion';





const Path1 = () => {

  

 

  return (
    <div className='relative items-center justify-center h-screen mb-12 p-5 text-center  text-[#E9E9EB] font-uno'>
     <div className='h-screen'>
    <h1 className='font-bold text-4xl mb-4 py-3 md:py-8  uppercase bg-gradient-to-r bg-clip-text text-transparent from-orange-500 via-red-500 to-[#AF72DA] animate-text'>
    
     
   
    </h1>
    <p className='flex lg:hidden  text-xl m-3'> scroll down to see very cool stuff</p>
   
     <div className='lg:ml-[32rem] md:ml-[10rem] ml-[0.8rem] mt-8 md:mt-20 lg:mt-10'>
     <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 10 }}
              transition={{duration: 3.5, delay: 0}}
       
  >
      <img src={Foto1} alt="" className='lg:p-1 h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem]  md:border-[#AF72DA] lg:border-solid lg:border-4 '/>
      </motion.div>
      <p>by @nokoono</p>
     </div>
     </div>
     
     <div className='lg:mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row-dense justify-evenly'>
    
            <div>
            <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 10 }}
      transition={{duration: 3.5, delay: 0}}
       
  >
            <PhotoTemplate socialImg={Foto10} className='' user='@lilibellons'/>
            </motion.div>
            </div>
  
  
            <div>
            <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 10 }}
       transition={{duration: 3, delay: 0.3}}
       
  >
            <PhotoTemplate socialImg={Foto2} user='@sebastian_schwamm'/>
            </motion.div>
            <p className='text-sm lg:text-xl md:mt-5'>Bitcoin is really cool, right??</p>
            </div>
            <div>
              
              <p className='text-sm lg:text-xl md:py-3'>this is a good example of how to innovate, but at what cost?</p>
              <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 10 }}
       transition={{duration: 3, delay: 0.5}}
       
  >
            <PhotoTemplate socialImg={Foto11} user='@trippy'/>
            </motion.div>
            </div>
      
            <div className='col-span-2'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 10 }}
              transition={{duration: 3, delay: 0.5}}
       
  >
            <PhotoTemplate socialImg={Foto5} user='@nokoono'/>
            </motion.div>
            </div>
  <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 10 }}
       transition={{duration: 3.5, delay: 0}}
       
  >
            <div>
            <PhotoTemplate socialImg={Foto4} user='@alexgamsujenkins
'/>
            </div>
  </motion.div>
  <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 10 }}
       transition={{duration: 3, delay: 0.5}}
       
  >
            <div>
            <PhotoTemplate socialImg={Foto6} user='@muttermilk'/>
            </div>
            </motion.div>
            <div>
            <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 10 }}
        transition={{duration: 3, delay: 0}}
       
  >
            <PhotoTemplate socialImg={Foto7} user='@wizardofbarge'/>
            </motion.div>
            </div>
            <div>
            <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 10 }}
        transition={{duration: 3, delay: 0}}
       
  >
            <PhotoTemplate socialImg={Foto8} user='@allenmsutton'/>

            </motion.div>
            </div>
            <div className='col-span-2'>
            <motion.div
   
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 10 }}
   transition={{duration: 3, delay: 1}}
       
  >
            <PhotoTemplate socialImg={Foto9} user='@lilibellons'/>
            </motion.div>
            <p className='py-3 md:text-xl'>sometimes it is necessary to solve problems from another perspective, will it work? who knows</p>
            </div>
            <div>
            <motion.div
   
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 10 }}
   transition={{duration: 3, delay: 0.2}}
       
  >
            <PhotoTemplate socialImg={Foto3} user='@alexgamsujenkins'/>
            </motion.div>
            </div>
            
    </div>

    <Footer/>
</div>
  )
}

export default Path1