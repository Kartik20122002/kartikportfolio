export default function SkillsPage(){
    const skills = {
        'Languages' : ['C','C++','Python','Java','SQL'],
        'FrameWorks/Libraries' : ['Next.js','React.js','Express.js','Mongoose'],
        'Web Technologies' : ['Node.js','HTML5','CSS3','Javascript','Typescipt','Redux','HTMX','Mongoose'],
        'Databases' : ['MongoDB','Firebase DB','MySQL'],
        'Tools' : ['Git','Github','Postman','VS Code IDE','Passport.js','Next-Auth','Virtual Box'],
        'Other' : ['Object Oriented Programming','Data Structures' , 'Algorithms','Operating Systems' , 'Database Management' , 'System Design']
    }
    return (
    <div id="skills" className="w-full mb-8 px-0 md:px-[4rem]">
        <div className="text-[3rem] font-bold px-4 md:px-0 mb-[4rem]">Skills</div>

        {
            Object.keys(skills).map((skillset, index)=>{
                return <div className="flex my-4 items-center flex-col md:flex-row bg-glass rounded-md bg-grey-light py-4 px-3" key={index}>
                    <div className="px-4 py-2 bg-green text-center text-nowrap font-semibold rounded-md">{skillset} </div>
                    <div className="skills mt-4 md:mt-0 md:ml-6 gap-4 flex overflow-hidden justify-center md:justify-start flex-wrap ">
                        { skills[skillset]?.map((skill,i)=>{
                            return <div key={i} className="px-4 min-w-[4rem] w-fit text-center py-2 bg-glass bg-grey text-nowrap rounded-full">
                                {skill}
                            </div>
                        })}
                    </div>
                </div>
            })
        }
        
    </div>)
}