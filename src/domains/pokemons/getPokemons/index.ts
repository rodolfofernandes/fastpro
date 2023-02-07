import { GetPokemonService } from "./GetPokemon.service";
import { GetPokemonController } from "./GetPokemon.controller";
import { PokemonApi } from "../../../providers/externalApi/PokemonApi";
import { IGetNumberFromPokemonUrl } from "../../helpers/IGetNumberFromPokemonUrl";

const pokemonApi = new PokemonApi();

const iGetNumberFromPokemonUrl = new IGetNumberFromPokemonUrl();

const getPokemonService = new GetPokemonService(
  pokemonApi,
  iGetNumberFromPokemonUrl
);

const getPokemonController = new GetPokemonController(getPokemonService);

export { getPokemonController, getPokemonService, pokemonApi };
