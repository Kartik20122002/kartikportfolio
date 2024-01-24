import { motion , useAnimate } from "framer-motion";

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
    <div id="education" className="w-full px-4 mb-8 md:px-[4rem]">
        <div className="text-[3rem] font-bold">Education</div>
        <div className={`px-1 flex flex-col gap-6 md:flex-row mt-4 `}>
        {education?.map((item,index)=>{
            const {college , degree , branch , grade , date } = item;
            return <div key={index} className={`w-full md:hover:scale-[1.1] transition-all duration-1000 flex flex-col rounded-lg md:my-[4rem] bg-glass bg-grey-light px-4 md:px-[2rem] py-[4rem]`}>

            <div className="text-4xl font-semibold">{college}
            </div>
            <div className="mt-2 text-2xl font-medium">{degree}</div>
           {branch &&  <div className="mt-2 text-xl font-normal">{branch}</div> }
            <div className="mt-2 px-4 py-2 bg-grey-light bg-glass w-fit rounded-lg">Grade : {grade}</div>
            <div className="mt-2 text-xl font-normal opacity-50">{date}</div>
           </div>
        })}
        </div>
        
    </div>)
}

