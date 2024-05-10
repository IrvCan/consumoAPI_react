import { useState, useEffect } from "react";
import { getRandomFact } from "../service/facts";


export function useCatFact () {
    const [fact, setFact] = useState()
  
    const refresFact = () => {
      getRandomFact().then(newFact => setFact(newFact))
    }
  
    useEffect(refresFact,[]);
  
    return { fact, refresFact}
  
  }
  