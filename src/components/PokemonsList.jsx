import { useEffect, useState } from 'react'
import PokemonItem from './PokemonItem'
import { fetchPokemons } from '../services/fetchPokemons'
import '../styles/PokemonsList.css'

function PokemonList() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemons()
      .then(setPokemons)
      .catch(error => console.error('An error has occured while fetching pokemons:', error))
  }, [])

  return (
    <>
      <ul className="pokemons-list">
        <PokemonItem pokemons={pokemons} />
      </ul>
    </> 
  )
  }

export default PokemonList

/* This is the PokemonList component. This is the ul component.
Its first role is to capsule the li components. 
Its second role is to pass a fetched array of pokemons to the PokemonItem component.
We use the useState hook to set the state of the pokemons.
We use the useEffect hook to fetch the API. We will be fetching the API we created here : https://github.com/LouisAntoninLesieur/backend-revision, ran on 3000 port. To enhance code readability and scalability, we embedded the fetch function in 'services'.
*/