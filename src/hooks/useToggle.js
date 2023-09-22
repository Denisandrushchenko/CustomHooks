import { useState } from "react";

export default function useToggle(initVal){
    const [value , setValue] = useState(initVal)

    const toggle = () => {
        setValue(prev => !prev)
    } 

    return [value , toggle]

}