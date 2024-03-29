import Icon from '@/Components/Icon'
import {motion} from 'framer-motion'
export default function ProjectPage() {

    const projects = [
        { 
            icon : '' ,
            name : 'Youtube Pro',
            github : 'https://github.com/Kartik20122002/YouTube-2.0',
            link : 'https://youtubepro.vercel.app/',
            stack : [
                { name : 'Next.js' , path : './nextjs.svg'},
                { name : 'React.js', path : './react.ico'},
                { name : 'MongoDB' , path : './mongodb.ico'},
                { name : 'Typescript' , path : './typescript.ico'},
                { name : 'Next Auth' , path : './nextauth.png'},
                { name : 'Tailwind CSS' , path : './tailwind-css.ico'},
                { name : 'Framer Motion' , path : './framer.ico'},
                { name : 'Youtube API' , path : './youtube.ico'}
            ],
            description : [
                'Ad-Free Video Streaming and Downloading Platform, providing core features of YouTube.',
                'User can watch videos, channels , playlists, and can perform actions like subscribing, rating, comment, share, etc.',
                'Authenticated with Google Auth 2.0 for best security.'
            ],
            startDate : 'July 2023',
            endDate : 'Sep 2023'
        },
        { 
            icon : '' ,
            name : 'Gmanager',
            github : 'https://github.com/Kartik20122002/Gmanager',
            link : 'https://gmanager-gvl7.onrender.com/',
            stack :
            [
                { name : 'Node.js' , path : './nodejs.ico'},
                { name : 'Express.js', path : './express.ico'},
                { name : 'EJS' , path : null },
                { name : 'MongoDB' , path : './mongodb.ico'},
                { name : 'JavaScript' , path : './javascript.ico'},
                { name : 'BootStrap' , path : './bootstrap.ico'},
                { name : 'JWT Auth' , path : null},
                { name : 'Gmail API' , path : './gmail.ico'}
            ],
            description : [
                'Optimized Gmail PDF management through segregation by sender, enhancing navigation and retrieval efﬁciency for speciﬁc documents.',
                'Empowered users to create custom folders based on PDF attachments, promoting personalized content organization and efﬁcient workﬂows.',
                'Integrated PDF preview feature for immediate viewing, facilitating seamless downloading of PDFs as required enhancing user convenience and productivity. Validated by feedback from over 50 users.'
            ],
            startDate : 'Jan 2023',
            endDate : 'Feb 2023'
        },
        { 
            icon : '' ,
            name : 'Text Tools',
            github : 'https://github.com/Kartik20122002/Text-Tools',
            link : 'https://texttools98.onrender.com/',
            stack :
            [
                { name : 'Node.js' , path : './nodejs.ico'},
                { name : 'Express.js', path : './express.ico'},
                { name : 'EJS' , path : null },
                { name : 'MongoDB' , path : './mongodb.ico'},
                { name : 'FireBase' , path : './firebase.ico' },
                { name : 'JavaScript' , path : './javascript.ico'},
                { name : 'BootStrap' , path : './bootstrap.ico'},
                { name : 'JWT Auth' , path : null},
                { name : 'Rest API' , path : './api.ico'}
            ],
            description : [
                'Text-Tools is a Web-App to help users with various things such as Image to Text Translation, Paragraph Summarizer, Text to Speech,etc.',
                'With a User Account, Users can Sign up and save results in their account and directly download saved data to their local devices',
                'Authenticated with JWT for best security.'
            ],
            startDate : 'Oct 2022',
            endDate : 'Nov 2022'
        },
    ]


    return (
        <div id="projects" className="w-full mb-8 py-8 px-0 md:px-[4rem]">

            <div className="text-[3rem] font-bold px-4 md:px-0 mb-[4rem]">Projects</div>

            <div className={`w-full mt-4 overflow-hidden`}>
                {projects?.map((project,index)=>{
                    return <ProjectTab key={index} project={project} />
                })}
            </div>
        </div>
        )
}


const ProjectTab = ({project})=>{
    const { name , link , github , stack , description , startDate , endDate} = project;
    return <div className="flex flex-col md:flex-row mb-[6rem] flex-wrap">
    <div className="basis-[35%] grow shrink">
        <div  className="text-4xl text-center md:text-start font-medium">{name}</div>
        <div className="w-fit md:mx-1 mb-4 mx-auto opacity-50 mt-2"> 
                            <span className="text-center">({startDate}</span>
                            <span className='mx-2'>-</span>
                            <span className="mr-3 text-center">{endDate})</span>
        </div>
        <div className="relative my-[1.5rem] border rounded-xl bg-grey-light bg-glass hidden md:block max-w-[486px] aspect-video overflow-clip">
            <LiveProject link={link} />
        </div>
    </div>

    <div className="basis-[60%] relative shrink grow md:min-w-[30rem] bg-glass bg-grey-light rounded-xl p-2 mr-4 ml-4 md:mr-0 md:ml-6">
        <div className="w-full flex-wrap rounded-lg flex justify-center md:justify-normal mt-2">
            {
                stack?.map((item,index)=>{
                    return <motion.span  drag
                    dragConstraints={{
                        right: 0,
                        top : 0,
                        bottom : 0,
                        left: 0,
                    }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                    dragElastic={0.1}
                    whileTap={{ cursor: "grabbing" }} key={index} className='flex gap-2 flex-nowrap mx-2 cursor-grab transition-colors relative text-nowrap bg-glass bg-grey-light hover:bg-grey py-2 px-4 mb-2 rounded-md'>
                        <span><Icon path={item.path}/></span>{item.name}
                        </motion.span>
                })
            }
        </div>
        <div className="px-2 mt-6">
                    { description?.map((work,index)=>{
                     return <div key={index} className="flex items-start mb-2">
                            <span className='text-2xl mr-1'>&bull;</span>   
                            <span className='mt-1 font-medium'>{work}</span>
                            </div>
                    })}
        </div>
        <div className="mt-[4rem] mb-[1rem] flex flex-wrap gap-3 justify-evenly md:justify-normal md:mx-6">
            <a href={link} target="_blank" className="px-4 py-2 bg-green min-w-[10rem] md:min-w-0 text-center rounded-lg md:mr-6 text-lg font-semibold ">Visit</a>
            <a href={github} target="_blank" className="px-4 py-2 bg-green min-w-[10rem] md:min-w-0 text-center rounded-lg text-lg font-semibold ">Github</a>
        </div>
    </div>

    </div>
}

const LiveProject = ({link}) =>{
    return <iframe style={{
        transformOrigin : 'top left',
        transform : 'scale(0.45)'
    }} src={link} seamless aria-controls="false" className="w-[1080px] max-w-[1080px] aspect-video rounded-xl" />
}