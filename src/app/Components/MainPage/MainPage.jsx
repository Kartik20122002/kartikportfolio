import EducationPage from "../Pages/Education/Education";
import HomePage from "../Pages/Home/HomePage";

export default function MainPage(){
    return (
    <div className="w-full px-4 md:px-0 md:pl-[4rem] text-white mt-[10vh]">
        <HomePage/>
        <EducationPage/>
    </div>)
}