import React, {useEffect} from 'react'
import PhotoTemplate from '../photoTemplate';
import Foto1 from '../fotos/hand.jpg';
import Foto2 from '../fotos/alien.jpg';
import Foto3 from '../fotos/trans.jpg';
import Foto4 from '../fotos/ojos.jpg';
import Foto5 from '../fotos/jupi.jpg';
import Foto6 from '../fotos/space.jpg';
import Foto7 from '../fotos/y.jpg';
import Foto8 from '../fotos/estrella.jpg';
import Foto9 from '../fotos/otra.jpg';
import Foto10 from '../fotos/foto.jpg';
import Foto11 from '../fotos/robot.jpg';
import Footer from '../footer';
import { motion, useAnimation } from 'framer-motion';





const Path3 = () => {

  
 

  return (
    <div className='relative items-center justify-center h-screen mb-12 p-5 text-center  text-[#E9E9EB] font-dos'>
     <div className='h-screen'>
    <h1 className='font-bold text-4xl mb-4 py-3 md:py-8  uppercase bg-gradient-to-r bg-clip-text text-transparent from-sky-500 via-green-500 to-indigo-500 animate-text'>
    
      explore ↓
   
    </h1>
   
    <p className='px-1 md:px-0 text-xl md:text-2xl md:text-center flex lg:hidden'> scroll to navigate in the outer space and beyond</p>
     <div className='lg:ml-[32rem] md:ml-[10rem] ml-[0.8rem] mt-8 md:mt-20 lg:mt-10'>
     <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 10 }}
              transition={{duration: 3.5, delay: 0}}
       
  >
      <img src={Foto1} alt="" className='lg:p-1 h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem]   l '/>
      </motion.div>
     </div>
     </div>
     
     <div className='lg:mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row-dense justify-evenly '>
    
            <div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 10 }}
            transition={{duration: 3, delay: 0.3}}
       
  >
            <PhotoTemplate socialImg={Foto10} className='' user='unknown'/>
            </motion.div>
            </div>
  
  
            <div>
            <motion.div
       
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 10 }}
       transition={{duration: 3, delay: 0.5}}
       
  >
            <PhotoTemplate socialImg={Foto2} user='unknown'/>
            </motion.div>
            <p className='text-sm lg:text-xl md:mt-5'></p>
            </div>
            <div>
              
              <p className='text-sm lg:text-xl md:py-3'></p>
              <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 10 }}
              transition={{duration: 3.5, delay: 0}}
       
  >
            <PhotoTemplate socialImg={Foto11} user='Ralph McQuarrie'/>
            </motion.div>
            </div>
      
            <div className='col-span-2'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 10 }}
              transition={{duration: 3, delay: 0.5}}
       
  >
            <PhotoTemplate socialImg={Foto5} user='Kasuaki Iwasaki'/>
            </motion.div>
            </div>
  <motion.div
     
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 10 }}
     transition={{duration: 2, delay: 0}}
       
  >
            <div>
            <PhotoTemplate socialImg={Foto4} user='@beeple_crap'/>
            </div>
  </motion.div>
  <motion.div
   
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 10 }}
   transition={{duration: 3, delay: 1}}
       
  >
            <div>
            <PhotoTemplate socialImg={Foto6} user='@danielmercadante'/>
            </div>
            </motion.div>
            <div>
            <motion.div
   
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 10 }}
   transition={{duration: 3, delay: 0}}
       
  >
            <PhotoTemplate socialImg={Foto7} user='Robert McCall '/>
            </motion.div>
            <p className='text-md md:text-lg m-1 md:p-4'>inspired in some Asimov book</p>
            </div>
            <div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 10 }}
            transition={{duration: 3, delay: 0.5}}
       
  >
            <PhotoTemplate socialImg={Foto8} user='@running.files'/>

            </motion.div>
            </div>
            <div className='col-span-2'>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 10 }}
            transition={{duration: 3, delay: 0}}
       
  >
            <PhotoTemplate socialImg={Foto9} user='@lilibellons'/>
            </motion.div>
            <p className='py-3 md:text-xl'></p>
            </div>
            <div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 10 }}
            transition={{duration: 2, delay: 0.5}}
       
  >
            <PhotoTemplate socialImg={Foto3} user='Yoshiyuki Takani'/>
            </motion.div>
            </div>
            
    </div>

    <Footer/>
</div>
  )
}

export default Path3