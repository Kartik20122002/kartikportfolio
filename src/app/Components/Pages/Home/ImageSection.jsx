import Image from 'next/image';

export default function ImageSection(){
    const path = './user.svg'
    return (
    <div className="flex items-center justify-center w-1/4 h-full mx-auto mt-4 md:mx-0 md:mt-0 md:w-full">
        <div className="overflow-hidden rounded-full w-fit">
        <Image width={100} height={100} src={path} className='w-full' alt='User'/>
        </div>
    </div>)
}