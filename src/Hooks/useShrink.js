export default function useShrink(){
    const { scrollY } = useScroll()
    
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            return true;
        } else {
            return false;
        }
    });

}