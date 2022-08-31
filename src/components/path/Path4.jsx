import React, {useEffect} from 'react'
import PhotoTemplate from '../photoTemplate';
import Foto1 from '../fotos/oj.jpg';
import Foto2 from '../fotos/pc.jpg';
import Foto3 from '../fotos/love.jpg';
import Foto4 from '../fotos/tierra.jpg';
import Foto5 from '../fotos/samurai.jpg';
import Foto6 from '../fotos/universe.jpg';
import Foto7 from '../fotos/pote.jpg';
import Foto8 from '../fotos/mimi.jpg';
import Foto9 from '../fotos/bugs.png';
import Foto10 from '../fotos/car.jpg';
import Foto11 from '../fotos/halo.jpg';
import Footer from '../footer';
import { motion, useAnimation } from 'framer-motion';





const Path4 = () => {

  
 

  return (
    <div className='relative items-center justify-center h-screen mb-12 p-5 text-center  text-[#E9E9EB] font-tres'>
     <div className='h-screen'>
    <h1 className='font-bold text-4xl mb-4 py-3 md:py-8  uppercase bg-gradient-to-r bg-clip-text text-transparent from-amber-500 via-pink-500 to-red-500 animate-text'>
    
      Enjoy
   
    </h1>
   
    <p className='px-1 md:px-0 text-xl md:text-2xl md:text-center flex lg:hidden'> scroll down to see more content, i hope you like it</p>
     <div className='lg:ml-[29rem] md:ml-[10rem] ml-[0.8rem] mt-8 md:mt-20 lg:mt-10'>
     <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 10 }}
              transition={{duration: 3.5, delay: 0}}
       
  >
      <img src={Foto1} alt="" className='lg:p-1 h-[20rem] w-[20rem] md:h-[35rem] md:w-[35rem]'/>
      </motion.div>
     </div>
     </div>
     
     <div className='lg:mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row-dense justify-center '>
    
            <div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 10 }}
            transition={{duration: 3, delay: 0.3}}
       
  >
            <PhotoTemplate socialImg={Foto10} className='' user='Outrun'/>
            </motion.div>
            </div>
  
  
            <div>
            <motion.div
       
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 10 }}
       transition={{duration: 3, delay: 0.5}}
       
  >
            <PhotoTemplate socialImg={Foto2} user='@wizardofbarge'/>
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
            <PhotoTemplate socialImg={Foto4} user='@super___freak'/>
            </motion.div>
            </div>
      
            <div className='col-span-2'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 10 }}
              transition={{duration: 3, delay: 0.5}}
       
  >
            <PhotoTemplate socialImg={Foto5} user='Samurai Jack'/>
            </motion.div>
            </div>
  <motion.div
     
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 10 }}
     transition={{duration: 2, delay: 0}}
       
  >
            <div>
            <PhotoTemplate socialImg={Foto11} user='@stohtl'/>
            </div>
  </motion.div>
  <motion.div
   
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 10 }}
   transition={{duration: 3, delay: 1}}
       
  >
            <div>
            <PhotoTemplate socialImg={Foto6} user='@ovcharkart'/>
            </div>
            </motion.div>
            <div>
            <motion.div
   
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 10 }}
   transition={{duration: 3, delay: 0}}
       
  >
            <PhotoTemplate socialImg={Foto7} user='@dirtypote '/>
            </motion.div>
            <p className='text-md md:text-lg m-1 md:p-4'></p>
            </div>
            <div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 10 }}
            transition={{duration: 3, delay: 0.5}}
       
  >
            <PhotoTemplate socialImg={Foto8} user='@nina_dzyvulska'/>

            </motion.div>
            </div>
            <div className='col-span-2'>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 10 }}
            transition={{duration: 3, delay: 0}}
       
  >
            <PhotoTemplate socialImg={Foto9} user='Bugs Bunny'/>
            </motion.div>
            <p className='py-3 md:text-xl'></p>
            </div>
            <div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 10 }}
            transition={{duration: 2, delay: 0.5}}
       
  >
            <PhotoTemplate socialImg={Foto3} user='@slimyoddity'/>
            </motion.div>
            </div>
            
    </div>

    <Footer/>
</div>
  )
}

export default Path4