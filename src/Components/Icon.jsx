export default function Icon({path}){
    return path ? <img loading="lazy" src={path} alt={path} className="w-auto h-[1.5rem]" /> : null
}