import { useEffect, useState, useRef } from 'react';

export const useNearScreen = () => {
  const element = useRef(null)
  const [showItem, setShowItem] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) =>{
        const { isIntersecting } = entries[0]            
       if(isIntersecting){
           setShowItem(isIntersecting)
           observer.disconnect()
        }            
    })
   
    observer.observe(element.current)
  }, [element])

  return [showItem, element]
}
