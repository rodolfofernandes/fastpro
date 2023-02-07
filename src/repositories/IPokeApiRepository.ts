export interface IPokemonApiRepository {
  getAllPokemons(offset: number): Promise<any>;
  getPokemonByName(name: string): Promise<any>;
}
