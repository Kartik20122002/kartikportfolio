'use client'
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react";
import Image from 'next/image'
import { MenuButton } from "./MenuButton";


const name = "Kartik Hatwar"
const links = [
    {
        title : 'Education',
        id : '#education',
    },
    {
        title : 'Experience',
        id : '#experience',
    },
    {
        title : 'Projects',
        id : '#projects',
    },
    {
        title : 'Skills',
        id : '#skills',
    },
    {
        title : 'Contact',
        id : '#contact',
    },
]

export default function NavBar() {
    const { scrollY } = useScroll()
    const [shrink, setShrink] = useState(false);
    const [isOpen, setOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setShrink(true);
        } else {
            setShrink(false);
        }
    });

    useEffect(() => {
        if (shrink == false) {
            setOpen(false);
        }
    }, [shrink]);

    const menuButtonStyle = {
        marginLeft: "2rem"
    };

    const shrinkCss = 'w-[70%] bg-[#a7a3a31c] md:w-[50%] lg:w-[30%]';
    const expandCss = 'w-[99%]';

    return (
        <AnimatePresence>

            <motion.div className={`${shrink ? shrinkCss : expandCss} fixed top-4 text-white rounded-xl flex justify-between text-center py-2`}>

                <motion.div className="flex items-center px-4 rounded-xl justify-evenly">
                    <motion.div className="mr-2">
                        <Image src={'./user.svg'} width={100} height={100} className={`rounded-full !min-w-0 !min-h-0 !w-10 !h-10`} alt="user" />
                    </motion.div>
                    {
                        !shrink &&
                         <motion.div className="hidden font-bold md:block md:text-2xl">
                            {name}
                        </motion.div>
                    }
                </motion.div>

                <motion.div className={`flex px-1`} >

        
                    <motion.div className={`${shrink ? 'flex' : 'flex md:hidden'} items-center text-white cursor-pointer justify-center pr-4`}>
                        <MenuButton className="w-full" isOpen={isOpen} onClick={() => setOpen(!isOpen)} style={menuButtonStyle} />
                    </motion.div>
                        
                    <motion.div className={`${shrink ? 'hidden' : 'md:flex hidden'} items-center px-2`} >
                        {links.map((link, index) => {
                            return <motion.a layout className="mx-2 text-lg font-bold" key={index} href={link.id}>{link.title}</motion.a>
                        })}
                    </motion.div>
                    



                </motion.div>

                <AnimatePresence>
                    {
                        isOpen && <motion.div className="absolute text-white w-full flex flex-col mt-2 rounded-lg bg-[#a7a3a31c] top-[100%] left-0">
                            {links.map((link, index) => {
                                return <motion.a onClick={()=>setOpen(false)} key={index} className="py-2 cursor-pointer my-1 text-lg rounded-md hover:bg-[#bcbaba1c] " href={link.id}>{link.title}</motion.a>
                            })}
                        </motion.div>
                    }
                </AnimatePresence>

            </motion.div>



        </AnimatePresence>
    )
}

