import { useState, useEffect, useRef } from "react";
import "../App.scss";
import PokemonCardContainer from "../components/PokemonCardContainer/PokemonCardContainer";
import { PokemonData } from "../components/PokemonCard/PokemonCard";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
const PAGINATION_NUMBER = 30;
const POKEMON_LIMIT = 151;

function Home() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  // Store the actual number of the pagination.
  const [pokemonPage, setPokemonPage] = useState(1);
  const [totalPokemonsFetched, setTotalPokemonsFetched] = useState(0);
  const [isFetchingPokemon, setIsFetchingPokemon] = useState(false);
  const [isFetchPokemonError, setIsFetchError] = useState(false);
  const [isPokemonLimitReached, setIsPokemonLimitReached] = useState(false);
  const isFirstMount = useRef(false);

  useEffect(() => {
    // First Fetch to API.
    if (!isFirstMount.current) {
      fetchPokemonsData();
      isFirstMount.current = true;
    }
    // If pagination button has been clicked once;
    if (pokemonPage > 1) {
      fetchPokemonsData();
    }
  }, [pokemonPage]);

  /**
   * Fetch the pokemon Data from PokeAPI and save it on State as an array.
   */
  async function fetchPokemonsData() {
    // First API call will only fetch name and the url of the endpoint for the pokemon data.
    setIsFetchingPokemon(true);
    setIsFetchError(false);
    let pokemonsResponse;
    let pokemonsJson;

    // Calculate next fetch limit.
    const remainingPokemons = POKEMON_LIMIT - totalPokemonsFetched;
    const limit = Math.min(PAGINATION_NUMBER, remainingPokemons);

    try {
      /* Try fetching the list ok pokemons from the API
              If there is an error it will prevent the code to go further. 
          */
      pokemonsResponse = await fetch(
        `${API_URL}?offset=${
          PAGINATION_NUMBER * pokemonPage - PAGINATION_NUMBER
        }&limit=${limit}`
      );
      pokemonsJson = await pokemonsResponse.json();
    } catch (error) {
      console.log(error);
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

      // Check if the pokemon limit has ben reached
      const newTotalPokemonsFetched =
        totalPokemonsFetched + pokemonDataArray.length;
      setTotalPokemonsFetched(newTotalPokemonsFetched);

      if (newTotalPokemonsFetched >= POKEMON_LIMIT) {
        setIsPokemonLimitReached(true);
      }
    } catch (error) {
      setIsFetchError(true);
      console.log(error);
    } finally {
      setIsFetchingPokemon(false);
    }
  }

  function handleNextPokemonPage() {
    if (!isPokemonLimitReached && !isFetchPokemonError) {
      setPokemonPage((prev) => prev + 1);
    } else if (isFetchPokemonError) {
      fetchPokemonsData();
    }
  }

  return (
    <>
      <PokemonCardContainer
        pokemons={pokemons}
        isFetchingPokemon={isFetchingPokemon}
        isFetchPokemonError={isFetchPokemonError}
        handleNextPokemonPage={handleNextPokemonPage}
        isPokemonLimitReached={isPokemonLimitReached}
      ></PokemonCardContainer>
    </>
  );
}

export default Home
