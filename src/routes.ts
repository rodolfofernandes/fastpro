import { Router } from "express";
import { createUserController } from "./domains/users/createUsers";
import { getPokemonController } from "./domains/pokemons/getPokemons";
import { authLoginController } from "./domains/login";
import { authorize } from "./middleware/AuthMiddleware.service";
import "express-async-errors";

const router = Router();

router.post("/users/create", (request, response) => {
  return createUserController.handle(request, response);
});

router.post("/auth/login", (request, response) => {
  return authLoginController.handle(request, response);
});

router.get("/pokemon/:offset", (request, response) => {
  authorize(request, response, () => {
    return getPokemonController.handle(request, response);
  });
});

export { router };
