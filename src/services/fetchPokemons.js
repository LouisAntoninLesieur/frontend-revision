export const fetchPokemons = async () => {
  const response = await fetch('http://localhost:3000/api/pokemons')
  const data = await response.json()
  return data
}

/* This is the fetchPokemons function. It is used to fetch the pokemons from the API we created here : https://github.com/LouisAntoninLesieur/backend-revision. */