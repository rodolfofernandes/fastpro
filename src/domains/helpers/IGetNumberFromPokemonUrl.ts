import { IGetNumberFromPokemonUrlRepository } from "../../repositories/IGetNumberFromPokemonUrlRepository";

export class IGetNumberFromPokemonUrl
  implements IGetNumberFromPokemonUrlRepository
{
  getNumberFromPokemonUrl(url: string) {
    const urlParts = url.split("/");
    const numberString = urlParts[urlParts.length - 2];
    if (numberString.length > 1) {
      return parseInt(numberString.replace(/\D/g, ""));
    }
    return parseInt(numberString);
  }
}
