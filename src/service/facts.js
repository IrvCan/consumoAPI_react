const ENDPOINT_RAMDON_FACT ='https://catfact.ninja/fact';

export const getRandomFact = async () => {
    const res = await fetch(ENDPOINT_RAMDON_FACT);
    const data = await res.json();
    const { fact } = data;
    return fact;
  }

export const getRandomImage = async (firstWord) => {
    const res = await fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
    //const data = await res.json();
    const { url } = res;
    return url
}