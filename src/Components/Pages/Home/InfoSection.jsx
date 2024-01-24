import { motion , useScroll , useTransform } from 'framer-motion'


export default function InfoSection(){

    const name = "Kartik Hatwar";
    const description = "I am Full Stack Developer with Hands on Experience with Tech like Next.js, MERN Stack and System Design."
    const links = [
        {
            link : 'https://drive.google.com/file/d/1p0j6SUGf_7DajJd5Xx4NI88ILW6TB6sL/view?usp=sharing', name : 'Resume',
        },
        {
            link : 'https://www.linkedin.com/in/kartikhatwar' , name : 'LinkedIn',
        },
        {
            link : 'mailto:kartikhatwar98@gmail.com' , name : 'Email',
        }
    ]



    // 
    return (
    <motion.div 
    className="flex flex-col px-4 items-center md:items-start max-w-full sm:mt-[2rem] md:mt-[4rem] cursor-pointer overflow-hidden mb-[10rem] py-4 rounded-lg bg-glass bg-grey-light shadow-md">
        <motion.div className="py-2 heading mb-[3rem]">
            <motion.div layout className="text-[3rem] text-center md:text-start md:text-[4rem] font-bold">{ name}</motion.div>
        </motion.div>
        <motion.div className="py-2 px-2 md:px-0 text-[1.5rem] md:text-[2rem] font-semibold text-center md:text-start">
            {description}
        </motion.div>

        <motion.div className="flex justify-center mt-[3rem] md:justify-start buttons">
            {
                links?.map((link,index)=>{
                    return <Button key={index} index={index} item={link} />
                })
            }
        </motion.div>
    </motion.div>)
}

const Button = ({item , index})=>{
   
    return item?.link ? <motion.a key={index} className="p-2 mx-4 my-2 font-semibold border rounded-md" href={item?.link}>{item?.name}</motion.a>
    : null
}