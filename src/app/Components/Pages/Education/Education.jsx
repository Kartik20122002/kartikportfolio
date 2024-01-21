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
    <div id="education" className="w-full min-h-[90vh]">
        
        <div className="text-[3rem] font-bold">Education</div>

        <div className="w-[99%] mt-4">
            {education.map((item,index)=>{
                return <EducationSection key={index} reverse={index%2} item={item} />
            })}
        </div>
        
    </div>)
}

const EducationSection = ({reverse,item})=>{
    const {college , degree , branch , grade , date } = item;

    return <>
    <div className={`w-full p-3 ${reverse && 'md:ml-auto md:items-end'}
     min-h-[15rem] flex flex-col shadow-[#85838352] shadow-lg rounded-lg my-[4rem] bg-[#27272794] px-[3rem] py-[2rem] md:w-[60%]`}>
     <div className="text-4xl font-semibold">{college}</div>
     <div className="mt-2 text-2xl font-medium">{degree}</div>
    {branch &&  <div className="mt-2 text-xl font-normal">{branch}</div> }
     <div className="mt-2">Grade : {grade}</div>
     <div className="mt-2 text-xl font-normal opacity-75">{date}</div>
    </div>
    </> 
    
}