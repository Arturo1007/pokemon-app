import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonDetailCard from "../components/PokemonDetailCard/PokemonDetailCard";
import { PokemonData } from "../components/PokemonCard/PokemonCard";

function Pokemon() {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<PokemonData>();
  const [pokemonSpecieData, setPokemonSpecieData] = useState(); 
  const isFirstMount = useRef(false);
  const API_URL = "https://pokeapi.co/api/v2";

  useEffect(() => {
    if (!isFirstMount.current) {
      isFirstMount.current = true;
      fetchPokemon();
    }
  }, []);

  // TBD: Manejo de errores y loader.
  async function fetchPokemon() {
    const pokemonResponse = await fetch(`${API_URL}/pokemon/${pokemonName}`);
    const pokemonJson = await pokemonResponse.json();
    const pokemonSpecieDataResponse = await fetch(`${API_URL}/pokemon-species/${pokemonJson.name}`);
    const pokemonSpecieDataJson = await pokemonSpecieDataResponse.json();
    setPokemon(pokemonJson);
    setPokemonSpecieData(pokemonSpecieDataJson);
  }

  return(
    <>{(pokemon && pokemonSpecieData) && <PokemonDetailCard pokemon={pokemon} pokemonSpecie={pokemonSpecieData}/>}</>
  ) 
}

export default Pokemon;
