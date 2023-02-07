import { IPokemonApiRepository } from "../../../repositories/IPokeApiRepository";
import { IGetPokemonRequestDTO } from "./dto/IGetPokemonRequestDTO";
import { IGetNumberFromPokemonUrl } from "../../helpers/IGetNumberFromPokemonUrl";

export class GetPokemonService {
  constructor(
    private pokemonRepository: IPokemonApiRepository,
    private iGetNumberFromPokemonUrl: IGetNumberFromPokemonUrl
  ) {}

  async execute(data: IGetPokemonRequestDTO) {
    const pokemons = await this.pokemonRepository.getAllPokemons(data.offset);

    const { results } = pokemons;

    const pokemonNamesAndId = await results.map((pokemon: any) => {
      return {
        name: pokemon.name,
        id: this.iGetNumberFromPokemonUrl.getNumberFromPokemonUrl(pokemon.url),
      };
    });

    const pokemonData = await Promise.all(
      pokemonNamesAndId.map(async (pokemon) => {
        const { abilities } = await this.pokemonRepository.getPokemonByName(
          pokemon.name
        );
        return { name: pokemon.name, id: pokemon.id, abilities };
      })
    );
    return pokemonData;
  }
}
