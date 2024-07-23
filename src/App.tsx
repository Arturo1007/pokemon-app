import { useState, useEffect, useRef } from "react";
import "./App.scss";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import PokemonCardContainer from "./components/PokemonCardContainer/PokemonCardContainer";
import { PokemonData } from "./components/PokemonCard/PokemonCard";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const isFirstMount = useRef(false);

  useEffect(() => {
    if(!isFirstMount.current) {
      fetchPokemonData();
      isFirstMount.current = true;
    }
  }, []);

/**
 * Fetch the pokemon Data from PokeAPI and save it on State as an array.
 */
  async function fetchPokemonData() {  
    // First API call will only fetch name and the url of the endpoint for the pokemon data.
    const pokemonsResponse = await fetch(`${API_URL}?limit=151`);
    const pokemonsJson = await pokemonsResponse.json();
  
    // Taking each pokemon endpoint url and fetch them.
    const PokemonDataPromises = pokemonsJson.results.map(async (pokemonJson : {name: string, url: string}) => {
      const pokemonDataResponse =  await fetch(pokemonJson.url);
      const pokemonDataJson = await pokemonDataResponse.json();
      return pokemonDataJson;
    });

    // Saving Pokemons data on an array
    const pokemonDataArray = await Promise.all(PokemonDataPromises);
    setPokemons(pokemonDataArray);
  }

  return (
    <>
      <HeaderMenu></HeaderMenu>
      <PokemonCardContainer pokemons={pokemons}></PokemonCardContainer>
    </>
  );
}

export default App;
