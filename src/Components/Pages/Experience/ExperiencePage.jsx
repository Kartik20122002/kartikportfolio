import { motion } from 'framer-motion';

export default function ExperiencePage() {

    const experience =
    {
        companyName: 'Gypssy',
        companyDescription: "My internship at Gypssy, a Bangalore-based startup, exposed me to their innovative travel platform. Gypssy seamlessly connects tourists to dream vacations while empowering tour providers. The user-friendly interface simplifies trip planning, with a secure payment system ensuring smooth transactions. Gypssy's emphasis on transparency, showcased through robust review systems, aligns with their vision of shaping the future of travel. This experience deepened my understanding of the travel industry and their commitment to providing unforgettable experiences.",
        type : 'Remote',
        location: 'Bangalore',
        role: 'Full Stack Developer',
        stack: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
        roleDescription: [
            'Spearheaded the implementation of the Next.js framework to enhance user engagement and performance on website,demonstrating expertise in modern React.js frameworks.',
            'Designed and coded a visually appealing and intuitive user interface, prioritizing accessibility and visual appeal, and increasing user engagement by up to 50%.',
            'Bridged front-end and back-end systems for seamless data flow, improving website performance by 30% and showcasing a holistic understanding of web development.',
            'Employed Redux Toolkit and Tailwind CSS to efficiently manage application state, leading to improved performance and SEO by up to 90%.'
        ],
        startDate: '5 May 2023',
        endDate: '25 July 2023',
        duration : '3 Months',
        certificateLink: null,
    }


    return (
        <div id="experience" className="w-full mb-8 px-0 md:px-[4rem]">

            <div className="text-[3rem] font-bold px-4 md:px-0 mb-[4rem]">Experience</div>

            <div className={`w-full mt-4 overflow-hidden`}>

                <div id='exp1'>
                    <div id='head1' className="heading flex flex-col md:flex-row mb-6 px-4 md:px-0 items-center justify-between">
                        <div className="text-4xl text-center mb-4 font-semibold">{experience?.role}</div>
                        <div className="opacity-85 px-4 py-2 rounded-xl font-medium flex items-center bg-glass bg-grey-light justify-center h-full text-xl"> 
                            <span className="text-center">{experience?.startDate}</span>
                            <span className='mx-2'>-</span>
                            <span className="mr-3 text-center">{experience?.endDate}</span>
                           <span className='text-center mx-1 hidden sm:flex'>({experience?.duration})</span>
                        </div>
                    </div>

                    <div className="px-4 md:px-0 flex flex-col-reverse md:flex-row">

                        <div id='role1' className="bg-glass grow shrink-0 bg-grey-light rounded-lg basis-1/3 px-2 py-4 ">

                           <div className="my-2 flex justify-center flex-wrap">
                            {experience?.stack?.map((item,index)=>{
                                return <span key={index} className='mx-2 bg-glass bg-grey-light py-2 px-4 mb-2 rounded-md'>
                                    {item}
                                    </span>
                            })}
                           </div>

                            <div className=" p-1 flex flex-wrap items-center justify-center">
                                {experience?.roleDescription?.map((work,index)=>{
                                    return <div key={index} className="flex items-start mb-2">
                                     <span className='text-2xl mr-1'>&bull;</span>   
                                     <span className='mt-1 font-medium'>{work}</span>
                                    </div>
                                })}
                            </div>

                        </div>

                        <div id='exp1img' className="image shrink grow-0 basis-1/3 flex items-center justify-center">
                            <div className="w-1/2 relative">
                            <img src="/laptop.png" className='w-full h-auto'/>
                            </div>
                        </div>

                        <div id='comp1' className="bg-glass relative grow shrink-0 bg-grey-light rounded-lg basis-1/3 py-4 px-6">
                            <div className="text-2xl text-center font-medium">{experience.companyName}</div>
                            <div className="flex justify-between mt-4 opacity-75">
                              <span>  Location : {experience.location} </span>
                              <span> Type : {experience.type}</span>
                            </div>
                            
                            <div className="mt-[2rem] font-semibold">
                                {experience.companyDescription}
                            </div>

                            {
                                experience?.certificateLink ? <div className="certificate mt-[4rem]">
                                <a href={experience?.certificateLink} className='px-4 py-2 rounded-lg bg-grey'>Certificate</a>
                            </div> : null
                            }
                        </div>
                    </div>

                </div>

            </div>

        </div>
        )
}