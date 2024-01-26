import { motion } from "framer-motion";

export default function EducationPage(){

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
  
    return (
    <div id="education" className="w-full px-4 my-[6rem] md:px-[4rem]">
        <div className="text-[3rem] mb-[4rem] font-bold">Education</div>

        <motion.div layout className={`px-1 relative flex flex-col gap-6 md:flex-row mt-4 `}>

        {education?.map((item,index)=>{
            const {college , degree , branch , grade , date } = item;

            return <motion.div drag
            dragConstraints={{
                right: 0.5,
                top : 0.5,
                bottom : -0.5,
                left: -0.5,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.1}
            whileTap={{ cursor: "grabbing" }}
            layout key={index}
            className={`w-full overflow-hidden rounded-lg cursor-grab flex bg-semidark flex-col px-4 md:px-[2rem] py-[4rem]`}>

            <motion.div layout
            className="clg text-4xl text-center md:text-start px-4 py-2 overflow-hidden rounded-lg font-semibold">
              <motion.span>{college}</motion.span>  
            </motion.div>

            <div className="mt-6 px-4 py-2 text-center md:text-start rounded-lg">
            <div className="mt-4 text-2xl font-medium">{degree}</div>
            {branch &&  <div className="mt-2 text-xl font-normal">{branch}</div> }
            <div className="mt-3 py-2 font-medium w-fit mx-auto md:mx-0 rounded-lg">Grade : {grade}</div>
            <div className="mt-3 text-xl font-normal opacity-50">{date}</div>
            </div>
           </motion.div>
        })}
        </motion.div>
        
    </div>)
}

