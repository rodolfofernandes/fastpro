import { Request, Response, NextFunction, response } from "express";
import { JwtRepository } from "../providers/jwt/JwtRepository";
import "express-async-errors";
import { UnauthorizedError } from "../helpers/ApiErrors";

const jwtRepository = new JwtRepository();

export const authorize = async (
  req: Request,
  response: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return response.json(new UnauthorizedError("Não autorizado"));
  }

  const token = authorization.split(" ")[1];

  const user = await jwtRepository.validateToken(token);

  if (!user) {
    throw new UnauthorizedError("Não autorizado");
  }

  next();
};
