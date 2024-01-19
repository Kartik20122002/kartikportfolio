'use client'
import { useScroll , useMotionValueEvent , motion , AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react";
import Image from 'next/image'
import { MenuButton } from "./MenuButton";


const name = "Kartik Hatwar"
const links =[
    'Education','Experience','Projects','Skills','Contact'
]
 
export default function NavBar(){
    const { scrollY } = useScroll()
    const [shrink, setShrink] = useState(false);
    const [isOpen,setOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if(latest > 50){
            setShrink(true);
        }else{
            setShrink(false);
        }
    });

    useEffect(()=>{
        if(shrink == false){
            setOpen(false);
        }
    },[shrink]);

    const menuButtonStyle = {
        marginLeft: "2rem"
      };

    const shrinkCss = 'w-[70%] md:w-[50%] lg:w-[30%] bg-[#a7a3a31c] text-white';
    const expandCss = 'w-[99%] bg-[#a7a3a31c] text-white';

    return (
        <AnimatePresence>

        <motion.div 
        layout transition={{duration : 0.5}} 
        className={`${shrink ? shrinkCss : expandCss} fixed top-4 rounded-xl flex justify-between text-center py-2`}>

    <motion.div layout transition={{duration : 0.5}} className="flex items-center px-4 rounded-xl justify-evenly">
        <motion.div transition={{duration : 0.5}} layout  initial={{ opacity: 0 }} animate={{ opacity: 1 , transition:{delay : 0.5 , duration : 0.5} }} exit={{ opacity: 0 }} className="mr-2">
        <Image src={'./user.svg'} width={100}  height={100} className={`rounded-full !min-w-0 !min-h-0 !w-10 !h-10`} alt="user" />
        </motion.div>
        {
            !shrink && <motion.div layout initial={{ x: '-100%' , opacity : 0 }} animate={{ x: 0 , opacity : 1 }} exit={{ x: '100%' , opacity : 0 }} transition={{duration:0.5}} className="hidden font-bold md:block md:text-2xl">
                            {name}
                       </motion.div>
        }
    </motion.div>

    <motion.div layout
    className={`flex px-1`}
    >
        
             <motion.div layout transition={{duration : 0.5}} className={`${shrink ? 'flex' : 'flex md:hidden'} items-center justify-center pr-4`}>
                <MenuButton className="w-full" isOpen={isOpen} onClick={() => setOpen(!isOpen)} style={menuButtonStyle}/> 
            </motion.div> 
            
            <motion.div layout transition={{duration: 0.5 , delay : 0.3}} className={`${shrink ? 'hidden' : 'md:flex hidden'} items-center px-2`} >
                {links.map((link,index) => {
                return <motion.a layout initial={{opacity : 0}} transition={{delay : index*0.3 , duration : 0.5}} animate={{opacity : 1}} exit={{ opacity : 0 }} className="mx-2 text-lg font-bold" key={index} href="#">{link}</motion.a>
                })}
                
            </motion.div>
        
           

   </motion.div>

    <AnimatePresence>
    {
        isOpen && <motion.div transition={{duration:0.5}} initial={{opacity : 0 , height : 0}} exit={{opacity : 0 , height : 0}} animate={{opacity : 1 , height : 'fit-content'}} className="absolute text-white w-full flex flex-col mt-2 rounded-lg bg-[#a7a3a31c] top-[100%] left-0">
        {links.map((link, index) =>{
            return <motion.a key={index} initial={{opacity : 0}} animate={{opacity : 1 , transition : {delay : 0.3 + index*0.2}}} exit={{opacity : 0}} className="py-2 cursor-pointer my-1 text-lg rounded-md hover:bg-[#bcbaba1c] " href="#">{link}</motion.a>
        })}
    </motion.div>
    }
    </AnimatePresence>

      </motion.div>



    </AnimatePresence>
    )
}

