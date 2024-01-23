import { motion , useScroll , useTransform } from 'framer-motion'
import { useRef } from 'react';

export default function InfoSection(){
    const tabRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target:tabRef,
        offset : ['start end','end start'],
    });

    const opacity = useTransform(scrollYProgress ,[0.5,1],[1,0]);
    const scale = useTransform(scrollYProgress ,[0.5,1],[1,0]);
    
    const name = "Kartik Hatwar";
    const description = "I am Full Stack Developer with Hands on Experience with Tech like Next.js, MERN Stack and System Design."

    const namearray = name.split("");
    const descriptionarray = description.split("");
    const tabVariants = {
        hide : {
            width : 0 , paddingInline : 0
        },
        show : {
            width : 'fit-content' , paddingInline : '1.5rem',
            transition: {
              delay : 1,  duration: 1 , ease : 'easeInOut'
            }
        }
    }

    const textVariants = {
        hide : {
            opacity : 0,
            transition : {
                duration : 1
            }
        },
        show : {
            opacity : 1,
        }
    }


    // 
    return (
    <motion.div style={{opacity ,scale}} ref={tabRef} layout 
    initial='hide' animate='show' exit='hide' variants={tabVariants}
    className="flex flex-col mt-[4rem] overflow-hidden mb-[10rem] py-4 rounded-lg h-fit bg-blur backdrop-filter backdrop-blur-lg z-0 bg-grey-light bg-opacity-10 shadow-md  ">
        <motion.div layout initial='hide' animate='show' exit='hide' transition={{delay : 0}} variants={tabVariants} className="py-2 heading mb-[3rem]">
            <motion.div layout className="text-[3rem] text-center md:text-start md:text-[4rem] font-bold">{
            namearray.map((char , index)=>{
               return <motion.span layout transition={{delay : 2 + 0.1*index , duration : 0.1}} variants={textVariants} key={index}>{char}</motion.span>
            })}
             </motion.div>
        </motion.div>
        <motion.div layout initial='hide' animate='show' exit='hide' transition={{delay : 2}} variants={textVariants} className="py-2 px-2 md:px-0 text-[1.5rem] md:text-[2rem] font-semibold text-center md:text-start">
            {descriptionarray.map((char , index)=>{
               return <motion.span layout transition={{delay : 3.3 + 0.06*index , duration : 0.1 , staggerChildren : 0.1}} variants={textVariants} key={index}>{char}</motion.span>
            })}
        </motion.div>

        <motion.div className="flex justify-center mt-[3rem] md:justify-start buttons">
            <Button index={0} link={'#'} name={'Resume'} />
            <Button index={1} link={'#'} name={'LinkedIn'} />
            <Button index={2} link={'#'} name={'Email'} />
        </motion.div>
    </motion.div>)
}

const Button = ({name , link , index})=>{
    const tabVariants = {
        hide : {
            opacity : 0,
            transform : 'translateY(100%)',
        },
        show : {
            transform : 'translateY(0)',
            opacity : 1,
        }
    }
    return <>
        <motion.a layout initial='hide' animate='show' exit='hide' transition={{
            delay : 2 + index*0.7, duration : 0.5
            }} variants={tabVariants} className="p-2 mx-4 my-2 font-semibold border rounded-md" href={link}>{name}</motion.a>
    </>
}