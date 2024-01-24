'use client'
import { useAnimate , motion, stagger, useScroll, AnimatePresence } from "framer-motion";
import { MenuButton } from "./MenuButton";
import { useEffect, useState } from "react";

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

    const [scope,animate] = useAnimate();
    const [menuScope,Manimate]  = useAnimate();
    const [show , setShow] = useState(true);
    const [isOpen ,setOpen] = useState(false);

    const animations = {
        hideNav : { scaleX : 0, duration : 0.3  },
        showNav : { scaleX : 1 ,  },
        hideLinks : { scale : 0 },
        showLinks :{ scale : 1 }
    }

    const useAnimation = () =>{
        animate([
          [scope.current,animations.showNav,{duration : 0.3 }],
          ['a',animations.showLinks, {  duration : 0.02 , delay : stagger(0.02) ,   ease : 'easeInOut' , type :'spring', damping : 10 , stiffness : 100 }]
        ]);
      } 
  
      useEffect(()=>{
          useAnimation();
      },[])

    const {scrollY} = useScroll();

    scrollY.on('change',(latest)=>{
        if(latest < scrollY.getPrevious()){
           expandNav()
           setShow(true);
        }
        else{ shrinkNav(); setShow(false)}
        setOpen(false);
    })

    const scrollAnimations = {
        hideNav : { translateY : '-200%' },
        showNav : { translateY : '0%' }
    }

    const usermenuAnimations = {
        shrink : { height : 0, paddingTop : 0, paddingBottom : 0},
        expand : {height : 'fit-content' , paddingTop : '1rem' , paddingBottom : '1rem'}
    }
    
    const expandUserMenu = ()=> Manimate(menuScope.current,usermenuAnimations.expand);
    const shrinkUserMenu = ()=> Manimate(menuScope.current,usermenuAnimations.shrink)

    useEffect(()=>{
        if(isOpen) expandUserMenu();
        else shrinkUserMenu();
    },[isOpen])

    const expandNav = async ()=>{
        animate([
            [scope.current,scrollAnimations.showNav, { duration : 0.02, type : 'spring' , ease : 'easeIn' , damping : 20 , stiffness : 200 }],
         ])
    }

    const shrinkNav = async ()=>{
         animate([
            [scope.current,scrollAnimations.hideNav , { duration : 0.02, type : 'spring' , ease : 'easeIn' , damping : 20 , stiffness : 200 }],
         ])
    }

    return <>
     <motion.div ref={scope} initial='hideNav' variants={animations} className="fixed sm:!flex hidden flex-wrap py-4 mt-2 z-[1] rounded-md overflow-hidden text-white bg-glass bg-grey justify-evenly">
        { links.map((link) =>{
            return <motion.a  key={link.id} layout href={link.id} initial='hideLinks' variants={animations} className="mx-6 text-lg font-bold">
            {link.title}
            </motion.a>
        })
        }
    </motion.div>  

    <motion.div onClick={()=>setOpen(!isOpen)} className="flex sm:!hidden bg-grey hover:bg-[#65646461] bg-glass z-[1] items-center cursor-pointer fixed left-5 mt-2 py-4 px-4 rounded-md ">
       <motion.span className="mr-3 text-lg">Menu</motion.span> <MenuButton isOpen={isOpen}  />

       <motion.div ref={menuScope} initial='shrink' variants={usermenuAnimations} transition={{duration : 1}} className="absolute top-[120%] py-4 left-0 overflow-hidden bg-grey bg-glass rounded-lg flex flex-col">
       {  links.map((link) =>{
            return <motion.a key={link.id} layout href={link.id} className="px-8 py-2 text-2xl font-bold">
            {link.title}
            </motion.a>
        })
        }
       </motion.div>
    </motion.div>
    </>
}

