import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";

export default function HomePage(){
    
    return (
    <div className="flex flex-col-reverse w-full py-2 md:flex-row">

        <div className="infoSection basis-1/2">
            <InfoSection/>
        </div>

        <div className="imageContainer basis-1/2">
            <ImageSection/>
        </div>
        
    </div>)
}