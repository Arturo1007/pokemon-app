import { useState, useEffect, useRef } from "react";
import "./App.scss";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import PokemonCardContainer from "./components/PokemonCardContainer/PokemonCardContainer";
import { PokemonData } from "./components/PokemonCard/PokemonCard";

function App() {
  const API_URL = "https://pokeapi.co/api/v2/pokemon";
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const isFirstMount = useRef(false);

  useEffect(() => {
    if(!isFirstMount.current) {
      fetchPokemonData();
      isFirstMount.current = true;
    }
  }, [])

  async function fetchPokemonData() {  
    const pokemonsResponse = await fetch(`${API_URL}?limit=900`);
    const pokemonsJson = await pokemonsResponse.json();

    const PokemonDataPromises = pokemonsJson.results.map(async (pokemonJson : {name: string, url: string}) => {
      const pokemonDataResponse =  await fetch(pokemonJson.url);
      const pokemonDataJson = await pokemonDataResponse.json();
      return pokemonDataJson;
    });

    const pokemonDataArray = await Promise.all(PokemonDataPromises);
    setPokemons(pokemonDataArray);
  }


  return (
    <>
      <HeaderMenu></HeaderMenu>
      <h1>All Pokemons</h1>
      <PokemonCardContainer pokemons={pokemons}></PokemonCardContainer>
    </>
  );
}

export default App;
