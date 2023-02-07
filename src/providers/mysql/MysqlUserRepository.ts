import { Users } from "../../database/entity/Users";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { DataSource } from "typeorm";

export class MysqlUserRepository implements IUsersRepository {
  constructor(private dataSource: DataSource) {}

  async save(user: Users): Promise<void> {
    const userRepository = this.dataSource.getRepository(Users);
    await userRepository.save(user);
  }

  async findByEmail(email: string): Promise<unknown> {
    const userRepository = this.dataSource.getRepository(Users);
    return await userRepository.findOneBy({ email });
  }
}
