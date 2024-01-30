import { useAnimate , motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React ,{ useEffect } from 'react';

export default function ImageSection(){

    const dx = 10;
    const dy = 10;

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring,[-0.5,0.5],[`${dx}deg`,`-${dx}deg`]);
    const rotateY = useTransform(mouseXSpring,[-0.5,0.5],[`-${dy}deg`,`${dy}deg`])

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

    const path = './user.svg';

    const handleMouseMove = (e)=>{
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const Xpct = (mouseX/width)-0.5;
        const Ypct = (mouseY/height)-0.5;
        x.set(Xpct); y.set(Ypct);
    }
    
    const handleMouseLeave =()=>{
        x.set(0);
        y.set(0);
    }

    return (
    <div ref={scope} className="flex items-start justify-center sm:mt-[4rem] py-4 md:mx-0 md:mt-0 w-full h-full rounded-lg ">

        <motion.div
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
         style={{
            rotateX,
            rotateY,
            transformStyle : "preserve-3d",
        }} id='outer' initial='hideTab' variants={variations} className="bg-grey-light inset-4 w-[10rem] h-[15rem] sm:w-[20rem] sm:h-[30rem] relative border-grey-light border origin-top z-0 flex justify-center items-center md:items-start rounded-xl p-[1rem]">
        
        <motion.div style={{
            transform : "translateZ(80px)",
            transformStyle : "preserve-3d",
        }}
        id='img' initial='hideImg' className='absolute inset-4 w-[9rem] h-[13rem] sm:w-[18rem] sm:h-[28rem] bg-grey border border-grey shadow shadow-grey p-[1rem] rounded-xl' variants={variations}>


        <motion.img style={{
            transform : "translateZ(20px)",
            transformStyle : "preserve-3d",
        }} loading='eager' src={path} className='w-[95%] h-[95%] rounded-full' alt='User'/>

        </motion.div>

        </motion.div>

    </div>)
}