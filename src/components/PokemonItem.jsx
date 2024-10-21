function PokemonItem({ pokemons }) {
  return (
    pokemons.map(pokemon => (
      <li key={pokemon.id}>{pokemon.id} {pokemon.name}</li>
    ))
  )
}

export default PokemonItem

/* This is the PokemonItem component. It is a child component of the PokemonList component. It is responsible for displaying Pokémons in li elements. 
The props 'pokemons' is passed to the PokemonItem component. It is an array of pokemons.
We use the map function to iterate over the array of pokemons.
*/