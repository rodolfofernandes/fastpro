import { IPokemonApiRepository } from "../../repositories/IPokeApiRepository";
import axios from "axios";

export class PokemonApi implements IPokemonApiRepository {
  async getPokemonByName(name: string): Promise<any> {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return response.data;
  }
  async getAllPokemons(offset: number): Promise<any> {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=${
        offset ? offset : 0
      }&limit=20}`
    );
    return response.data;
  }
}
