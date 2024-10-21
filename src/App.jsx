import PokemonList from './components/PokemonsList'

function App() {

  return (
    <>
      <h1>Hello Pokémons !</h1>
      <p>This is the 1st generation Pokémons' list.</p>
      <PokemonList />
    </>
  )
}

export default App

/* This is the App component. This is the top level component (parent component). In React, components embedded in other components are called "children". */