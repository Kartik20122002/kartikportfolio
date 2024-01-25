import { motion , stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react';


export default function InfoSection(){

    const [scope , animate] = useAnimate();

    const TabAnimations = {
        hideName : {opacity : 0} , showName : {opacity : 1},
        hideDesc : {opacity : 0} , showDesc : {opacity : 1},
        hideBtn : {translateY : '200%'} , showBtn : {translateY : '0%'},
    }

    const initAnimate = ()=> animate([
        ['#name',TabAnimations.showName,{duration : 0.1 , delay : 0.2 }],
        ['#desc',TabAnimations.showDesc,{duration : 0.1 , delay : 0.3}],
        ['.links',TabAnimations.showBtn,{duration : 0.1 , delay : stagger(0.1,'startDelay')  , type : 'spring' , damping : 20 , stiffness : 100 }],
    ]);

    useEffect(()=>{
        initAnimate();
    },[])

    const name = "Kartik Hatwar";
    const description = "I am Full Stack Developer with Hands on Experience with Tech like Next.js, MERN Stack and System Design."
    const links = [
        {
            link : 'https://drive.google.com/file/d/1p0j6SUGf_7DajJd5Xx4NI88ILW6TB6sL/view?usp=sharing', name : 'Resume',
        },
        {
            link : 'https://www.linkedin.com/in/kartikhatwar' , name : 'LinkedIn',
        },
        {
            link : 'mailto:kartikhatwar98@gmail.com' , name : 'Email',
        }
    ]


    return (
    <motion.div layout ref={scope}
    className="flex flex-col px-4 items-center md:items-start origin-left max-w-full sm:mt-[2rem] md:mt-[4rem] cursor-pointer overflow-hidden mb-[10rem] py-4">
        <motion.div className="py-2 heading mb-[3rem]">
            <motion.div layout initial='hideName' variants={TabAnimations} id='name' className="text-[3rem] text-center md:text-start md:text-[4rem] font-bold">{name}</motion.div>
        </motion.div>
        <motion.div layout initial='hideDesc' variants={TabAnimations} id='desc' className="py-2 px-2 md:px-0 text-[1.5rem] md:text-[2rem] font-semibold text-center md:text-start">
            {description}
        </motion.div>

        <div className="flex justify-center mt-[3rem] md:justify-start buttons">
            {
                links?.map((link,index)=>{
                    return link ? <motion.a layout initial='hideBtn' variants={TabAnimations} key={index} className="px-4 py-2 links mx-4 my-2 bg-darkgreen text-white font-semibold rounded-md" href={link?.link}>
                        {link?.name}
                        </motion.a>
                    : null
                })
            }
        </div>
    </motion.div>)
}
