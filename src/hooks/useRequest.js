import { useEffect, useState } from 'react';

export default function useRequest(url){
     
    const [data , setTodo] = useState()
    const [loading , setLoading ] = useState(false)

   useEffect( () => {
 
   ( async () => {
      setLoading(true)
 
      const res = await fetch(url)
      const todo = await res.json()
 
      setTodo(todo)
      
 
      setLoading(false)
   })()
 
  
   } , []);

   return [data , loading]

}