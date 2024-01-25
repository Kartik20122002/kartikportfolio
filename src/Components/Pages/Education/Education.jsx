import { motion , stagger, useAnimate, useDragControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function EducationPage(){

    const [scope , animate] = useAnimate();
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const widthSlider = {
        initial : { transformOrigin : 'left' , scaleX : 0 } ,
        final : {  transformOrigin : 'left' , scaleX : 1 },
        text : {opacity : 1}
    }

    const heightSlider = {
        initial : { transformOrigin : 'top' , scaleY : 0 } ,
        final : {  transformOrigin : 'top' , scaleY : 1 }
    }

    useEffect(()=>{
        if(isInView){
            animate([
                ['.clg',widthSlider.final,{duration : 0.5}],
                ['.clg span',widthSlider.text,{duration : 0.1 , delay : 0.5}]
            ])
        }
    },[isInView])

    const education = [
        {
            college : 'IIT (ISM) Dhanbad',
            degree : 'Bachelor of Technology',
            branch : 'Electrical Engineering',
            grade : '7/10 GPA',
            date : 'Dec 2020 - May 2024'
        },
        {
            college : 'Gandhi City Public School',
            degree : '12th (High School) Maharashtra Board',
            branch : null,
            grade : '78%',
            date : 'Aug 2019 - May 2020'
        },
        {
            college : 'Bharat Dhnyan Mandiram',
            degree : '10th Maharashtra Board',
            branch : null,
            grade : '88%',
            date : 'July 2017 - May 2018'
        },
        
    ]

    const dragControls = useDragControls();

  
    return (
    <div id="education" className="w-full px-4 my-[6rem]  md:px-[4rem]">
        <div ref={ref} className="text-[3rem] mb-[4rem] font-bold">Education</div>

        <motion.div layout ref={scope} className={`px-1 relative flex flex-col gap-6 md:flex-row mt-4 `}>

        {education?.map((item,index)=>{
            const {college , degree , branch , grade , date } = item;

            return <motion.div drag='x' dragControls={dragControls}
            layout key={index}
            className={`w-full overflow-hidden rounded-lg  transition-all duration-1000 flex bg-glass bg-grey-light flex-col px-4 md:px-[2rem] py-[4rem]`}>

            <motion.div layout initial='initial' variants={widthSlider} 
            className="clg text-4xl text-center px-4 py-2 overflow-hidden rounded-lg font-semibold">
              <motion.span initial={{opacity : 0}}>{college}</motion.span>  
            </motion.div>

            <div className="mt-6 px-4 py-2 rounded-lg">
            <div className="mt-4 text-2xl font-medium">{degree}</div>
            {branch &&  <div className="mt-2 text-xl font-normal">{branch}</div> }
            <div className="mt-3 px-4 py-2  w-fit rounded-lg">Grade : {grade}</div>
            <div className="mt-3 text-xl font-normal opacity-50">{date}</div>
            </div>
           </motion.div>
        })}
        </motion.div>
        
    </div>)
}

