import Image from 'next/image';
import { motion , useScroll , useTransform } from 'framer-motion'
import { useRef } from 'react';

export default function ImageSection(){
    const tabRef = useRef(null);
    const {scrollYProgress} = useScroll({
        offset : [0, 1],
    });

    const translateX = useTransform(scrollYProgress ,[0,1],['0%','200%']);
    const opacity = useTransform(scrollYProgress ,[0,1],[1,0]);
    const scale = useTransform(scrollYProgress ,[0,1],[1,0]);

    const path = './user.svg'

    const imgVariant = {
        hide : {
            scale : 0,
            opacity : 0,
        },
        show : {
            opacity : 1,
            scale : 1,
            transition: {
               delay : 3, duration: 1 , ease : 'easeInOut' , type : 'spring' , damping : 20 , stiffness : 200
            }
        }
    }

    return (
    <motion.div ref={tabRef} layout className="flex items-center justify-center w-1/4 mx-auto mt-[4rem] pt-[4rem] md:mx-0 md:mt-0 md:w-full">
        <motion.div style={{translateX,scale}} layout initial='hide' animate='show' exit='hide' variants={imgVariant} className="overflow-hidden rounded-full w-fit">
        <Image width={100} height={100} src={path} className='w-full' alt='User'/>
        </motion.div>
    </motion.div>)
}