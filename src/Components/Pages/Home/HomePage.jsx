import { useRef } from "react";
import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";
import { useScroll, useTransform } from "framer-motion";

export default function HomePage(){
    
    // const {scrollYProgress } = useScroll({
    //     target : ContainerRef,
    //     offset : ['start start' , 'end start']
    // })

    // 
    return (
    <div id="home" className="px-4 md:pt-[6rem] flex flex-col-reverse md:flex-row md:px-[4rem] w-full pb-2">
        

        <div className="basis-full md:basis-1/2">
            <InfoSection />
        </div>

        <div className="basis-full md:basis-1/2">
            <ImageSection />
        </div>
        
    </div>)
}