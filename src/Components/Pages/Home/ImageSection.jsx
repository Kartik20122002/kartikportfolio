import Image from 'next/image';
import { motion , useScroll , useTransform } from 'framer-motion'
import { useRef } from 'react';

export default function ImageSection(){
   
    const path = './user.svg'

 
    
    return (
    <motion.div className="flex items-center justify-center sm:mt-[4rem] overflow-hidden py-4 md:mx-0 md:mt-0 w-full h-full rounded-lg ">

        <motion.div  className="overflow-hidden bg-glass z-0 flex justify-center items-center md:items-start bg-grey-light rounded-xl shadow-md p-[2rem] w-full h-full md:h-fit md:w-1/2">

        <motion.div >
        <Image width={100} height={100} src={path} className='w-full rounded-full' alt='User'/>
        </motion.div>

        </motion.div>

    </motion.div>)
}