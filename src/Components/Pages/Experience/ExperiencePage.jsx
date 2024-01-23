import {motion} from 'framer-motion'

export default function ExperiencePage(){

    const experiences = [
        {
            companyName : 'Gypssy',
            companyDescription : 'Gypssy is leading startup, where provides platform to tourist and travelers to explore world market.',
            location : 'Remote',
            role : 'Full Stack Developer',
            stack : ['Next.js' , 'React.js', 'TypeScript' , 'Tailwind CSS', 'Redux'], 
            roleDescription : [
                'Spearheaded the implementation of the Next.js framework to enhance user engagement and performance on website,demonstrating expertise in modern React.js frameworks.',
                'Designed and coded a visually appealing and intuitive user interface, prioritizing accessibility and visual appeal, and increasing user engagement by up to 50%.',
                'Bridged front-end and back-end systems for seamless data flow, improving website performance by 30% and showcasing a holistic understanding of web development.',
                'Employed Redux Toolkit and Tailwind CSS to efficiently manage application state, leading to improved performance and SEO by up to 90%.'
            ],
            startDate : '5 May 2023',
            endDate : '25 July 2023',
            certificateLink : null,
        }
    ]
    
    return (
        <motion.div  layout id="experience" className="w-full">
        
        <motion.div className="text-[3rem] font-bold">Experience</motion.div>
        <motion.div className={`w-full mt-4`}>
            {
                experiences?.map((experience,index)=>{
                    const {role} = experience;
                    return <motion.div key={index}>
                        <motion.div className="heading">{role}</motion.div>

                    </motion.div>
                })
            }
        </motion.div>
        
    </motion.div>)
}