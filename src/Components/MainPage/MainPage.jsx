import EducationPage from "../Pages/Education/Education";
import ExperiencePage from "../Pages/Experience/ExperiencePage";
import HomePage from "../Pages/Home/HomePage";
import ProjectPage from "../Pages/Projects/ProjectPage";

export default function MainPage(){
    return (
    <div className="w-full  text-white mt-[10vh]">
        <HomePage/>
        <EducationPage/>
        <ExperiencePage/>
        <ProjectPage/>
    </div>)
}