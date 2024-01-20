export default function InfoSection(){
    const name = "Kartik Hatwar";
    const description = "I am Full Stack Developer with Hands on Experience with Tech like Next.js, MERN Stack and System Design."

    return (
    <div className="w-full h-[90vh] flex flex-col justify-evenly py-4">
        <div className="py-2 heading">
            <div className="text-[3rem] text-center md:text-start md:text-[4rem] font-bold">Hi, I am <span>{name}</span> </div>
        </div>
        <div className="py-2 text-[1.5rem] md:text-[2rem] font-semibold text-center md:text-start">
            {description}
        </div>

        <div className="flex justify-center md:justify-start buttons">
            <Button link={'#'} name={'Resume'} />
            <Button link={'#'} name={'LinkedIn'} />
            <Button link={'#'} name={'Email'} />
        </div>
    </div>)
}

const Button = ({name , link})=>{
    return <>
        <a className="p-2 mx-4 my-2 font-semibold border rounded-md" href={link}>{name}</a>
    </>
}