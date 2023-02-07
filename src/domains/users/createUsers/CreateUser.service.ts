import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./dto/ICreateUserRequestDTO";

export class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    await this.usersRepository.save(data);
  }
}
