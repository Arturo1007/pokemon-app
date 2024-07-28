import { useState, useEffect, useRef } from "react";
import "./App.scss";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import PokemonCardContainer from "./components/PokemonCardContainer/PokemonCardContainer";
import { PokemonData } from "./components/PokemonCard/PokemonCard";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [isFetchingPokemon, setIsFetchingPokemon] = useState(false);
  const [isFetchPokemonError, setIsFetchError] = useState(false);
  const isFirstMount = useRef(false);

  useEffect(() => {
    if (!isFirstMount.current) {
      fetchPokemonData();
      isFirstMount.current = true;
    }
  }, []);

  /**
   * Fetch the pokemon Data from PokeAPI and save it on State as an array.
   */
  async function fetchPokemonData() {
    // First API call will only fetch name and the url of the endpoint for the pokemon data.
    setIsFetchingPokemon(true);
    let pokemonsResponse;
    let pokemonsJson;

    try {
      /* Try fetching the list ok pokemons from the API
        If there is an error it will prevent the code to go further. 
      */
      pokemonsResponse = await fetch(`${API_URL}?limit=15`);
      pokemonsJson = await pokemonsResponse.json();
      console.log(pokemonsJson);
    } catch (error) {
      setIsFetchError(true);
      setIsFetchingPokemon(false);
      console.log("Error fetching the pokemon List");
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
      setPokemons(pokemonDataArray);
    } catch (error) {
      setIsFetchError(true);
      console.log("Error fetching the pokemon Data");
    } finally {
      setIsFetchingPokemon(false);
    }
  }

  return (
    <>
      <HeaderMenu></HeaderMenu>
      <PokemonCardContainer
        pokemons={pokemons}
        isFetchingPokemon={isFetchingPokemon}
        isFetchPokemonError={isFetchPokemonError}
      ></PokemonCardContainer>
    </>
  );
}

export default App;
