'use client'
import { useAnimate , motion, stagger, useScroll } from "framer-motion";
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
    const [scope2,animate2] = useAnimate();
    const [menuScope,Manimate]  = useAnimate();
    const [isOpen ,setOpen] = useState(false);

    const animations = {
        hideNav : { scaleX : 0, duration : 0.3  },
        showNav : { scaleX : 1 ,  },
        hideLinks : { scale : 0 },
        showLinks :{ scale : 1 }
    }
  
      useEffect(()=>{
        animate([
            [scope.current,animations.showNav,{duration : 0.5 }],
            ['a',animations.showLinks, {  duration : 0.05 , delay : stagger(0.02) ,   ease : 'easeInOut' , type :'spring', damping : 10 , stiffness : 100 }]
          ]);
      },[])

    const {scrollY} = useScroll();

    scrollY.on('change',(latest)=>{
        setOpen(false);
        
        if(latest < scrollY.getPrevious()){
           expandNav();
           expandNav2();
        }
        else{ 
            shrinkNav();
            shrinkNav2();
        }
    })

    const usermenuAnimations = {
        shrink : { height : 0, paddingTop : 0, paddingBottom : 0},
        expand : {height : 'fit-content' , paddingTop : '1rem' , paddingBottom : '1rem'}
    }
    
    const expandUserMenu = ()=>{
         Manimate(menuScope.current,usermenuAnimations.expand);
    }
    const shrinkUserMenu = ()=>{
        Manimate(menuScope.current,usermenuAnimations.shrink)
    } 

    useEffect(()=>{
        if(isOpen) expandUserMenu();
        else shrinkUserMenu();
    },[isOpen])

    const expandNav = ()=>{ animate([[scope.current,{ translateY : '0%' }, { duration : 0.02, type : 'spring' , ease : 'easeIn' , damping : 20 , stiffness : 200 }]]);}
    const expandNav2 = ()=>{ animate2([[scope2.current,{translateX : '0%'}, { duration : 0.02, type : 'spring' , ease : 'easeIn' , damping : 20 , stiffness : 200 }]]);}
    

    const shrinkNav = ()=>{ animate([[scope.current,{ translateY : '-200%' } , { duration : 0.02, type : 'spring' , ease : 'easeIn' , damping : 20 , stiffness : 200 }]]);}
    const shrinkNav2 = ()=>{ animate2([[scope2.current,{translateX : '-150%'} ,{ duration : 0.02, type : 'spring' , ease : 'easeIn' , damping : 20 , stiffness : 200 }]]);}
    

    return <>
     <motion.div ref={scope} initial='hideNav' variants={animations} className="fixed sm:!flex hidden flex-wrap py-4 mt-2 z-[1] rounded-md overflow-hidden text-white bg-glass bg-grey justify-evenly">
        { links.map((link) =>{
            return <motion.a  key={link.id} layout href={link.id} initial='hideLinks' variants={animations} className="mx-6 text-lg font-bold">
            {link.title}
            </motion.a>
        })
        }
    </motion.div>  

    <motion.div onClick={()=>setOpen(!isOpen)} className="flex sm:!hidden  z-[1] items-center cursor-pointer fixed left-3 mt-2 p-2 ">
       <motion.span ref={scope2} initial={{translateX:'-150%'}} animate={{translateX : '0%'}}  className="mr-3 text-lg bg-glass justify-center items-center py-4 px-4 gap-3 rounded-lg flex bg-grey">Menu <MenuButton  isOpen={isOpen}  />  </motion.span>

       <motion.div ref={menuScope} initial='shrink' variants={usermenuAnimations} transition={{duration : 1}} className="absolute top-[100%] py-4 left-0 overflow-hidden bg-grey bg-glass rounded-lg flex flex-col">
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

