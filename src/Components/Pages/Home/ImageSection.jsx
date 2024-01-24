import Image from 'next/image';

export default function ImageSection(){
   
    const path = './user.svg'
    
    return (
    <div className="flex items-center justify-center sm:mt-[4rem] overflow-hidden py-4 md:mx-0 md:mt-0 w-full h-full rounded-lg ">

        <div  className="overflow-hidden bg-glass z-0 flex justify-center items-center md:items-start bg-grey-light rounded-xl shadow-md p-[2rem] w-full h-full md:h-fit md:w-1/2">

        <div >
        <Image width={100} height={100} src={path} className='w-full rounded-full' alt='User'/>
        </div>

        </div>

    </div>)
}