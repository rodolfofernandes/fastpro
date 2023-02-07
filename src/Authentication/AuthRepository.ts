import { IUsersRepository } from "../repositories/IUsersRepository";
import { IauthLoginRepository } from "../repositories/ILoginRepository";

export class AuthRepository implements IauthLoginRepository {
  constructor(private iUsersRepository: IUsersRepository) {}

  async validatePassword(email: string, password: string): Promise<any> {
    const user = await this.iUsersRepository.findByEmail(email);

    if (user.password === password) {
      return user;
    }
  }
}
