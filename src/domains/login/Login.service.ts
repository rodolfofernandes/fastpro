import { IauthLoginRepository } from "../../repositories/ILoginRepository";
import { IauthLoginDTO } from "./dto/AuthLoginDTO";
import { JwtRepository } from "../../providers/jwt/JwtRepository";

export class AuthLoginService {
  constructor(
    private authLoginRepository: IauthLoginRepository,
    private jwtRepository: JwtRepository
  ) {}

  async execute(data: IauthLoginDTO) {
    try {
      const { email, password } = data;

      const user = await this.authLoginRepository.validatePassword(
        email,
        password
      );

      if (!user) {
        throw new Error("User not found or password incorrect");
      }

      const token = await this.jwtRepository.generateToken(user.id);

      return { token };
    } catch (error) {
      return error.message;
    }
  }
}
