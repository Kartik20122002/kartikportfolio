'use client'
import { useScroll, stagger, useMotionValueEvent, motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react";
import Image from 'next/image'
import { MenuButton } from "./MenuButton";


const name = "Kartik Hatwar"
const links = [
    {
        title : 'Home',
        id : '#home',
    },
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
    const shrinkCss = 'w-[70%] md:w-[50%] lg:w-[30%]';
    const expandCss = 'w-[99%]';

    const variants = {
        closed : {
            opacity : 0,
            width : 0,
            borderRadius : '10rem',
            transition: {
                duration: 2 , ease : 'easeInOut' , type : 'spring' , damping : 20 , stiffness : 200
            }
        },
        opened : {
            opacity : 1,
            width : 'fit-content',
            borderRadius : '0.5rem',
            transition: {
                duration: 2 , ease : 'easeInOut' , type : 'spring' , damping : 20 , stiffness : 200
            }
        }
    }


    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }


    return (
       <AnimatePresence>
        {
            false ? 
            <motion.div layout transition={{duration : 1}} className="fixed mt-4 bg-[#53525261] px-4">
            <MenuButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} style={menuButtonStyle} /> 
          </motion.div> 
            :

            <AnimatePresence>
            <motion.div layout
        variants={variants}
        initial = 'closed'
        animate = 'opened'
        exit= 'closed'
        className="fixed z-10 flex p-4 mt-2 text-white bg-blur backdrop-filter backdrop-blur-lg bg-grey bg-opacity-10 justify-evenly">
          {
            links.map( (link,index) =>{
                return <motion.div initial='hidden' animate='show' variants={item} 
                transition={{delay : (index)*0.2 + 1 , duration : 1}}
                 className="mx-6 text-lg font-bold"
                 key={link.id}>{link.title}</motion.div>
                
            })
          }
        </motion.div>
        </AnimatePresence>
        }
       </AnimatePresence>
    )
}

