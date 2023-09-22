import { useState, useEffect } from "react";

export default function useLocalStorage(initVal , key){
      const getVal = () => {
        const storage = localStorage.getItem(key);
        if(storage){
            return JSON.parse(storage);
        }
        return initVal
      }

     const [value , setValue] = useState(getVal); 
     
      useEffect(()=> {
           localStorage.setItem(key , JSON.stringify(value))

      } ,[value])


     return [value , setValue]


}