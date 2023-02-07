import { Request, Response } from "express";
import { AuthLoginService } from "./Login.service";

export class AuthLoginController {
  constructor(private authLoginService: AuthLoginService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const token = await this.authLoginService.execute({
      email,
      password,
    });

    return response.json(token);
  }
}
