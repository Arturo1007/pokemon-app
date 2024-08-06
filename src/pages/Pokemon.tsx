import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonDetailCard from "../components/PokemonDetailCard/PokemonDetailCard";
import { PokemonData } from "../components/PokemonCard/PokemonCard";

function Pokemon() {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<PokemonData>();
  const isFirstMount = useRef(false);
  const API_URL = "https://pokeapi.co/api/v2/pokemon/";
  let pokemonResponse;
  let pokemonJson;

  useEffect(() => {
    if (!isFirstMount.current) {
      isFirstMount.current = true;
      fetchPokemon();
    }
  }, []);

  // TBD: Manejo de errores y loader.
  async function fetchPokemon() {
    pokemonResponse = await fetch(`${API_URL}${pokemonName}`);
    pokemonJson = await pokemonResponse.json();
    setPokemon(pokemonJson);
  }

  return(
    <>{pokemon ? <PokemonDetailCard pokemon={pokemon}/>: <p>Error!</p>}</>
  ) 
}

export default Pokemon;
