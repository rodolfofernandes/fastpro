import { Request, Response } from "express";
import { CreateUserService } from "./CreateUser.service";
import bcrypt from "bcrypt";

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, telephone } = request.body;

    try {
      await this.createUserService.execute({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        telephone,
      });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
