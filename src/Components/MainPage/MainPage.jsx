import EducationPage from "../Pages/Education/Education";
import ExperiencePage from "../Pages/Experience/ExperiencePage";
import HomePage from "../Pages/Home/HomePage";
import ProjectPage from "../Pages/Projects/ProjectPage";
import SkillsPage from "../Pages/Skills/SkillsPage";

export default function MainPage(){
    return (
    <div className="w-full mt-[10vh]">
        <HomePage/>
        <EducationPage/>
        <ExperiencePage/>
        <ProjectPage/> 
        <SkillsPage/>
    </div>)
}