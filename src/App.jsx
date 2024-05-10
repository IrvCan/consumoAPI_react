import './App.css'
import { useCatFact } from './hooks/useCatFact';
import { useCatImage } from './hooks/useCatImage';


function App() {
  const { fact, refresFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact })
  

  const handleClick = async () => {
    refresFact();
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}> Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${imageUrl}`} alt='cat' />}
    </main>
  )
}

export default App
