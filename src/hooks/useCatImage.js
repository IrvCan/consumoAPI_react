import { useState, useEffect } from 'react'
import { getRandomImage } from '../service/facts'


export function useCatImage ({ fact}) {
    const [imageUrl, setImageUrl] = useState()
    
    useEffect (() => {
      if(!fact) return
      const firstWord = fact.split(' ')[0]
      
      getRandomImage(firstWord).then(imageUrl => setImageUrl(imageUrl));
      
    },[fact])
  
    return { imageUrl }
  }