import { motion , stagger, useAnimate, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react';
import { FaFilePdf } from 'react-icons/fa6'
import Icon from '@/Components/Icon';
import { TypeAnimation } from 'react-type-animation';

const name = "Kartik Hatwar";
const designations = ["Full Stack Developer",2000,
 "Competitive Programmer",2000,
 "Problem Solver",2000,
 "Software Developer",2000,
 "Front End Developer",2000,
 "Back End Developer",2000,]
const description = "I am Final Year Student at IIT Dhanbad. I have Extensive Knowlegde and Work Experience as Full Stack Developer working with Tech like Next.js, MERN Stack, AWS, etc. I am also Competitive Programmer on site like Codeforces, Leetcode, etc."
const links = [
    {
        link : 'https://drive.google.com/file/d/1p0j6SUGf_7DajJd5Xx4NI88ILW6TB6sL/view?usp=sharing', name : 'Resume',
        icon : <FaFilePdf className='text-slate-400' />,
    },
    {
        link : 'https://www.linkedin.com/in/kartikhatwar' , name : 'LinkedIn',
        icon : <Icon path="./linkedin.ico"/>,
    },
    {
        link : 'mailto:kartikhatwar98@gmail.com' , name : 'Email',
        icon : <Icon path={'./gmail.ico'}/>,
    }
]


export default function InfoSection({translateX}){
    const {translateX1,translateX12,opacity1} = translateX;
    const [scope , animate] = useAnimate();

    const TabAnimations = {
        hideName : {opacity : 0} , showName : {opacity : 1},
        hideDesc : {opacity : 0} , showDesc : {opacity : 1},
        hideBtn : {translateY : '200%'} , showBtn : {translateY : '0%'},
    }

    const initAnimate = ()=> animate([
        ['#name',TabAnimations.showName,{duration : 0.1 , delay : 0.2 }],
        ['#desig',TabAnimations.showName,{duration : 0.1 , delay : 0.2 }],
        ['#desc',TabAnimations.showDesc,{duration : 0.1 , delay : 0.3}],
        ['.links',TabAnimations.showBtn,{duration : 0.2 , delay : stagger(0.1,'startDelay') , type : 'spring' , damping : 10 , stiffness : 100 }],
    ]);

    const handelHover = (index,show)=>{
        const id = `#btn${index}`;

        if(show){
            animate(id,{scaleY : 1},{duration : 0.1 , damping : 20 , stiffness : 100 })
        }
        else animate(id,{scaleY : 0},{duration : 0.1, damping : 20 , stiffness : 100 })
    }
  

    useEffect(()=>{
        initAnimate();
    },[])


    return (
    <motion.div layout ref={scope} 
    className="flex flex-col gap-4 px-4 items-center md:items-start origin-left max-w-full sm:mt-[2rem] md:mt-[4rem] cursor-pointer  mb-[4rem] md:mb-[7rem] py-4">

        <motion.div style={{translateX : translateX1 , opacity : opacity1  }} className="heading">
            <motion.div  layout initial='hideName' variants={TabAnimations} id='name' className="text-[3rem] text-center md:text-start md:text-[4rem] font-bold">
                {name}
            </motion.div>
        </motion.div>

        <motion.div style={{translateX : translateX1 , opacity : opacity1 }} id='desig' initial='hideName' variants={TabAnimations} 
        className="text-[1rem] md:!text-[2rem] flex gap-1 font-semibold text-lightgreen blur-0">
            <span className='text-white'>I am</span> <motion.span className='ml-1'>
                <TypeAnimation
                sequence={designations}
                wrapper='span'
                speed={5}
                repeat={Infinity}
                cursor={false}
                />
            
            </motion.span>
            <motion.span layout transition={{duration : 1}} className='min-h-full min-w-[3.5px] animate-pulse bg-lightgreen'/>
        </motion.div>

        <motion.div style={{translateX : translateX1 , opacity : opacity1  }} layout initial='hideDesc' variants={TabAnimations} id='desc' className="flex flex-wrap px-2 md:px-0 text-[1rem] md:text-[1.5rem] font-semibold text-center md:text-start">
            {description.split(" ").map((word,i)=>{
                return <motion.span initial={{opacity : 0.2}} whileInView={{opacity : 1 }} viewport={{ once: true }} transition={{delay : 0.1*i + 0.4 , duration : 0.3}}  key={`word${i}`} className='mr-2' >
                            {word}
                        </motion.span>
            })}
        </motion.div>

        <motion.div style={{translateX : translateX1 , translateY : translateX12 , opacity : opacity1}} className="flex flex-wrap gap-4 justify-center mt-[3rem] md:justify-start buttons">
            {
                links?.map((link,index)=>{
                    return link ? 
                    <motion.span  onHoverStart={()=>handelHover(index,true)} onHoverEnd={()=>handelHover(index,false)} layout initial='hideBtn' target='_blank' variants={TabAnimations} key={index} className="py-2 links my-2 border flex relative flex-nowrap items-center overflow-hidden border-white hover:border-black text-white hover:text-black font-semibold rounded-md">
                    
                    <motion.div id={`btn${index}`} style={{scaleY : 0 }} className={`absolute origin-bottom -z-10 w-full flex h-full bg-white`}/>

                    <motion.a  href={link?.link} target='_blank' className='w-full h-full  gap-3 mx-4 flex flex-nowrap items-center'>
                       <span className='text-3xl'>{link.icon}</span> {link?.name}
                    </motion.a>
                    </motion.span>
                    
                    : null
                })
            }
        </motion.div>
    </motion.div>)
}
