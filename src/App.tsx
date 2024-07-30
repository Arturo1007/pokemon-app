import { useState, useEffect, useRef } from "react";
import "./App.scss";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import PokemonCardContainer from "./components/PokemonCardContainer/PokemonCardContainer";
import { PokemonData } from "./components/PokemonCard/PokemonCard";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
const PAGINATION_NUMBER = 30;

function App() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  // Store the actual number of the pagination.
  const [pokemonPage, setPokemonPage] = useState(1);
  const [isFetchingPokemon, setIsFetchingPokemon] = useState(false);
  const [isFetchPokemonError, setIsFetchError] = useState(false);
  const isFirstMount = useRef(false);

  useEffect(() => {
    // First Fetch to API.
    if (!isFirstMount.current) {
      fetchPokemonsData();
      isFirstMount.current = true;
    }
    // If pagination button has been clicked once;
    if(pokemonPage > 1) {
      fetchPokemonsData();
    }
  }, [pokemonPage]);

  /**
   * Fetch the pokemon Data from PokeAPI and save it on State as an array.
   */
  async function fetchPokemonsData() {
    // First API call will only fetch name and the url of the endpoint for the pokemon data.
    setIsFetchingPokemon(true);
    let pokemonsResponse;
    let pokemonsJson;

    try {
      /* Try fetching the list ok pokemons from the API
          If there is an error it will prevent the code to go further. 
      */
      pokemonsResponse = await fetch(`${API_URL}?offset=${(PAGINATION_NUMBER * pokemonPage) - PAGINATION_NUMBER}&limit=${PAGINATION_NUMBER}`);
      pokemonsJson = await pokemonsResponse.json();
    } catch (error) {
      setIsFetchError(true);
      setIsFetchingPokemon(false);
      return;
    }

    try {
      // Taking each pokemon endpoint url and fetch them.
      const PokemonDataPromises = pokemonsJson.results.map(
        async (pokemonJson: { name: string; url: string }) => {
          const pokemonDataResponse = await fetch(pokemonJson.url);
          const pokemonDataJson = await pokemonDataResponse.json();
          return pokemonDataJson;
        }
      );

      // Saving Pokemons data on an array, only updating after all the Api calls have completed.
      const pokemonDataArray = await Promise.all(PokemonDataPromises);
      setPokemons((prev) => [...prev, ...pokemonDataArray]);
    } catch (error) {
      setIsFetchError(true);
    } finally {
      setIsFetchingPokemon(false);
    }
  }

  function handleNextPokemonPage() {
    setPokemonPage((prev) => prev + 1);
  }

  return (
    <>
      <HeaderMenu></HeaderMenu>
      <PokemonCardContainer
        pokemons={pokemons}
        isFetchingPokemon={isFetchingPokemon}
        isFetchPokemonError={isFetchPokemonError}
        handleNextPokemonPage={handleNextPokemonPage}
      ></PokemonCardContainer>
    </>
  );
}

export default App;
