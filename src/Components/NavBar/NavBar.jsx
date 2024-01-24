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

    const variants = {
        closed : {
         width : 0 , paddingLeft:0 , paddingRight : 0
        },
        opened : {
            paddingLeft : 0 , paddingRight : 0 , width : 'fit-content',
            transition: {
                duration: 1.5 , ease : 'easeInOut'
            }
        }
    }


    const item = {
        hidden: { transform : 'translateY(-150%)' },
        show: { transform : 'translateY(0%)' }
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
            <motion.div layout variants={variants}
             initial='closed' animate='opened'
        className="fixed z-10 flex py-4 mt-2 rounded-md overflow-hidden text-white bg-glass bg-grey justify-evenly">
          {
            links.map( (link,index) =>{
                return <motion.a href={link.id}
                initial='hidden' animate='show' variants={item} 
                transition={{delay : (index)*0.4 + 1 , duration : 1}}
                 className="mx-6 text-lg font-bold"
                 key={link.id}>{link.title}</motion.a>  
            })
          }
        </motion.div>
        </AnimatePresence>
        }
       </AnimatePresence>
    )
}

