import Icon from "@/Components/Icon"

export default function SkillsPage(){
    const skills = {
        'Languages' : [
                { name : 'C' , path : './c.ico'},
                { name : 'C++', path : './c++.ico'},
                { name : 'Python' , path : './python.ico' },
                { name : 'Java' , path : './java.ico'},
                { name : 'SQL' , path : './sql.ico' },
        ],
        'FrameWorks/Libraries' : [
                { name : 'Next.js' , path : './nextjs.svg'},
                { name : 'React.js', path : './react.ico'},
                { name : 'Express.js' , path : './express.ico' },
                { name : 'Mongoose' , path : null},
        ],
        'Web Technologies' : [
            { name : 'Node.js' , path : './nodejs.ico'},
            { name : 'Mongoose' , path : null},
            { name : 'Redux' , path : './redux.ico'},
            { name : 'Typescript' , path : './typescript.ico'},
            { name : 'HTML5', path : './html.ico'},
            { name : 'CSS3' , path : './css.ico' },
            { name : 'Javascript' , path : './javascript.ico'},
            { name : 'HTMX' , path : null},
        ],
        'Databases' : [
                { name : 'MongoDB', path : './mongodb.ico'},
                { name : 'Firebase DB' , path : './firebase.ico' },
                { name : 'MySQL' , path : './mysql.ico'},
        ],
        'Tools' :[
            { name : 'Git' , path : './git.ico'},
            { name : 'Github', path : './github.ico'},
            { name : 'Postman' , path : './postman.ico' },
            { name : 'VS Code IDE' , path : './visual-studio-code.ico'},
            { name : 'Passport.js' , path : null},
            { name : 'Next-Auth' , path : null},
            { name : 'Virtual Box' , path : null},
        ],
        'Other' : [{name :'Object Oriented Programming'},
        {name : 'Data Structures'} ,{name : 'Algorithms'},{name : 'Operating Systems' }, {name : 'Database Management'} ,
         {name :'System Design'}]
    }
    return (
    <div id="skills" className="w-full mb-8 px-0 md:px-[4rem]">
        <div className="text-[3rem] font-bold px-4 md:px-0 mb-[4rem]">Skills</div>

        {
            Object.keys(skills).map((skillset, index)=>{
                return <div className="flex my-6 items-center flex-col md:flex-row bg-glass rounded-md md:bg-grey-light py-4 px-3" key={index}>
                    <div className="px-4 py-2 bg-green text-center text-nowrap font-semibold rounded-md">{skillset} </div>
                    <div className="skills mt-8 md:mt-0 md:ml-6 gap-4 flex overflow-hidden justify-center md:justify-start flex-wrap ">
                        { skills[skillset]?.map((skill,i)=>{
                            return <div key={i} className="flex gap-2 flex-nowrap px-4 min-w-[4rem] w-fit text-center py-2 bg-glass bg-grey text-nowrap rounded-full">
                                <span><Icon path={skill?.path} /></span> <span>{skill?.name}</span>
                            </div>
                        })}
                    </div>
                </div>
            })
        }
        
    </div>)
}