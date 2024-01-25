import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";

export default function HomePage(){
    
    return (
    <div id="home" className="flex px-4 md:px-[4rem] flex-col-reverse w-full py-2 md:flex-row">

        <div className="basis-1/2">
            <InfoSection/>
        </div>

        <div className="basis-full md:basis-1/2">
            <ImageSection/>
        </div>
        
    </div>)
}