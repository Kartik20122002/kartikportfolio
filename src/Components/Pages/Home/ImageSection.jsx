import { useAnimate , motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

export default function ImageSection(){

    const [scope , animate] = useAnimate();

    const variations = {
        hideTab : {scaleY : 0} , showTab : {scaleY : 1},
        hideImg : {opacity : 0} , showImg : {opacity : 1}
    }
   
    useEffect(()=>{
        animate([
            ['#outer',variations.showTab, {duration : 0.2  , type : 'spring' , damping : 20 , stiffness : 100}],
            ['#img',variations.showImg , {duration : 0.3  , type : 'spring' , damping : 20 , stiffness : 100}]
        ])
    })

    const path = './user.svg'
    
    return (
    <div ref={scope} className="flex items-start justify-center sm:mt-[4rem] overflow-hidden py-4 md:mx-0 md:mt-0 w-full h-full rounded-lg ">

        <motion.div id='outer' initial='hideTab' variants={variations} layout className="overflow-hidden origin-top bg-glass z-0 flex justify-center items-center md:items-start rounded-xl p-[2rem] w-full h-full md:h-fit md:w-1/2">
        
        <motion.div layout id='img' initial='hideImg' variants={variations}>
        <Image width={100} height={100} src={path} className='w-full rounded-full' alt='User'/>
        </motion.div>

        </motion.div>

    </div>)
}