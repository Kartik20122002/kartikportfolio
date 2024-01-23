import {  motion} from "framer-motion";

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
        }
    ]

  

   

    return (
    <motion.div  layout id="education" className="w-full">
        
        <motion.div className="text-[3rem] font-bold">Education</motion.div>
        <motion.div className={`w-[99%] mt-4 min-h-[80vh]`}>
        <EducationSection 
        reverse={false} item={education[0]} />

        <EducationSection 
        reverse={true} item={education[1]} />

        <EducationSection 
        reverse={false} item={education[2]} />
        </motion.div>
        
    </motion.div>)
}

const EducationSection = ({reverse,item})=>{
    const {college , degree , branch , grade , date } = item;

    return <>
    <motion.div className={`w-full md:w-[60%] ${reverse && 'md:ml-auto md:items-end'}
     min-h-[15vh] flex flex-col  rounded-lg my-[4rem] bg-blur backdrop-filter backdrop-blur-lg z-0 bg-white bg-opacity-10 px-4 md:px-[4rem] py-[4rem]`}>

     <motion.div className="text-4xl font-semibold">{college}
     </motion.div>
     <div className="mt-2 text-2xl font-medium">{degree}</div>
    {branch &&  <div className="mt-2 text-xl font-normal">{branch}</div> }
     <div className="mt-2">Grade : {grade}</div>
     <div className="mt-2 text-xl font-normal opacity-75">{date}</div>
    </motion.div>
    </> 
    
}