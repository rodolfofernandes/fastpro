import { Request, Response } from "express";
import { GetPokemonService } from "./GetPokemon.service";

export class GetPokemonController {
  constructor(private getPokemonService: GetPokemonService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { offset } = request.params;

    const pokemons = await this.getPokemonService.execute({
      offset: Number(offset),
    });

    return response.json(pokemons);
  }
}
