import { useState, useEffect } from 'react'
import './App.css'

const ENDPOINT_RAMDON_FACT ='https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL ='https://cataas.com';
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`

function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useEffect()

  useEffect(() =>{
    fetch(ENDPOINT_RAMDON_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      setFact(fact)
    });
  },[]);

  useEffect (() => {
    if(!fact) return
    const firstWord = fact.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
    .then(res => res.json())
    .then(response => {
      const { url } = response
      setImageUrl(url)
    })
  },[fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt='cat' />}
    </main>
  )
}

export default App
