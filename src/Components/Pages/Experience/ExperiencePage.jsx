import Icon from '@/Components/Icon';
import { motion } from 'framer-motion';

export default function ExperiencePage() {

    const experience =
    {
        companyName: 'Gypssy',
        companyDescription: "My internship at Gypssy, a Bangalore-based startup, exposed me to their innovative travel platform. Gypssy seamlessly connects tourists to dream vacations while empowering tour providers. The user-friendly interface simplifies trip planning, with a secure payment system ensuring smooth transactions. Gypssy's emphasis on transparency, showcased through robust review systems, aligns with their vision of shaping the future of travel. This experience deepened my understanding of the travel industry and their commitment to providing unforgettable experiences.",
        type: 'Remote',
        location: 'Bangalore',
        role: 'Full Stack Developer',
        stack: [
            {name : 'Next.js' , path : './nextjs.svg'},
            {name : 'React.js' , path : './react.ico'},
            {name : 'TypeScript' , path : './typescript.ico'},
            {name : 'Tailwind CSS' , path : './tailwind-css.ico'},
            {name : 'Redux' , path : './redux.ico'} , ],

        roleDescription: [
            'Spearheaded the implementation of the Next.js framework to enhance user engagement and performance on website,demonstrating expertise in modern React.js frameworks.',
            'Designed and coded a visually appealing and intuitive user interface, prioritizing accessibility and visual appeal, and increasing user engagement by up to 50%.',
            'Bridged front-end and back-end systems for seamless data flow, improving website performance by 30% and showcasing a holistic understanding of web development.',
            'Employed Redux Toolkit and Tailwind CSS to efficiently manage application state, leading to improved performance and SEO by up to 90%.'
        ],
        startDate: '5 May 2023',
        endDate: '25 July 2023',
        duration: '3 Months',
        certificateLink: null,
    }


    return (
        <div id="experience" className="w-full mb-8 px-0 md:px-[4rem]">

            <div className="text-[3rem] font-bold px-4 md:px-0 mb-[4rem]">Experience</div>

            <div className={`w-full mt-4 overflow-`}>

                <div id='exp1 w-full'>
                    <div id='head1' className="heading flex flex-col md:flex-row mb-6 px-4 md:px-0 items-center justify-between">
                        <div className="text-4xl text-center mb-4 font-semibold">{experience?.role}</div>
                        <div className="opacity-85 px-4 py-2 rounded-xl font-medium flex items-center bg-glass bg-grey text-white justify-center h-full text-xl">
                            <span className="text-center">{experience?.startDate}</span>
                            <span className='mx-2'>-</span>
                            <span className="mr-3 text-center">{experience?.endDate}</span>
                            <span className='text-center mx-1 hidden sm:flex'>({experience?.duration})</span>
                        </div>
                    </div>

                    <div className="px-4 md:px-0 flex flex-col flex-wrap md:flex-row">

                        <div id='comp1' className="bg-glass md:min-w-[25rem] relative grow shrink-0 bg-grey-light bg-glass rounded-lg basis-1/3 py-4 px-3 md:px-6">
                            <div className="text-3xl text-center md:text-start py-2 w-full rounded-md text-white font-bold">Company : {experience.companyName}</div>
                            <div className="flex justify-between md:justify-start flex-col md:flex-row mt-4 opacity-75">
                                <span className='md:pr-4'>  Location : {experience.location} </span>
                                <span> Type : {experience.type}</span>
                            </div>

                            <div className="mt-[2rem] font-semibold">
                                {experience.companyDescription}
                            </div>

                            {
                                experience?.certificateLink ? <div className="certificate mt-[4rem]">
                                    <a href={experience?.certificateLink} className='px-4 py-2 rounded-lg bg-darksemi'>Certificate</a>
                                </div> : null
                            }
                        </div>

                        <div id='role1' className="bg-glass md:min-w-[25rem] relative grow shrink-0 bg-grey-light rounded-lg basis-1/3  px-3 md:px-12 py-4 ">

                            <div className="my-2 flex justify-center flex-wrap">
                                {experience?.stack?.map((item, index) => {
                                    return <motion.span drag
                                        dragConstraints={{
                                            right: 0,
                                            top: 0,
                                            bottom: 0,
                                            left: 0,
                                        }}
                                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                                        dragElastic={0.1}
                                        whileTap={{ cursor: "grabbing" }}
                                        key={index} className='flex gap-2 flex-nowrap mx-2 cursor-grab text-white bg-grey bg-glass py-2 px-4 mb-2 rounded-lg'>
                                        <span><Icon path={item.path} /></span>  {item.name}
                                    </motion.span>
                                })}
                            </div>

                            <div className=" p-1 flex flex-wrap items-center justify-center">
                                {experience?.roleDescription?.map((work, index) => {
                                    return <div key={index} className="flex items-start mb-2">
                                        <span className='text-2xl mr-1'>&bull;</span>
                                        <span className='mt-1 font-medium'>{work}</span>
                                    </div>
                                })}
                            </div>

                        </div>

                        <div id='exp1img' className="md:min-w-[25rem] shrink relative grow basis-1/3 hidden md:!flex items-center justify-center">
                            <div className="w-1/2 relative">
                                <img alt='laptop' src="/laptop.png" className='w-full h-auto' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}