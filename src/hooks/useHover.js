
import { useEffect, useRef, useState } from 'react';

export default function () {

    const [isHover, setHover] = useState(false)
    
    const ref = useRef()

    const on = () => setHover(true)
    const off = () => setHover(false)

    useEffect(() => {
        const node = ref.current

        node.addEventListener('mouseenter', on)
        node.addEventListener('mousemove', on)
        node.addEventListener('mouseleave', off)

        return () => {
            node.removeEventListener('mouseenter', on)
            node.removeEventListener('mousemove', on)
            node.removeEventListener('mouseleave', off)
        }

        

    } , [])

    return [ref, isHover]
}