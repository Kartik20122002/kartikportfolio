import { useRef } from "react";
import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";
import { useScroll, useTransform } from "framer-motion";

export default function HomePage(){
    const ContainerRef = useRef(null);
    
    const {scrollYProgress } = useScroll({
        target : ContainerRef,
        offset : ['start start' , 'end start']
    })

    scrollYProgress.on('change',latest => console.log(latest))
    
    const translateX1 = useTransform(scrollYProgress,[0,1],['0%','-150%']);
    const translateX12 = useTransform(scrollYProgress,[0,1],['0%','150%']);
    const opacity1 = useTransform(scrollYProgress,[0,1],[1,0]);
    const translateX2 = useTransform(scrollYProgress,[0,1],['0%','150%']);

    // 
    return (
    <div id="home" ref={ContainerRef} className="px-4 md:pt-[6rem] flex flex-col-reverse md:flex-row md:px-[4rem] w-full pb-2">
        

        <div className="basis-full md:basis-1/2">
            <InfoSection translateX={{translateX1,translateX12,opacity1}}/>
        </div>

        <div className="basis-full md:basis-1/2">
            <ImageSection translateX2={translateX2}/>
        </div>
        
    </div>)
}