import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Users } from "../entity/Users";
import bcrypt from "bcrypt";

export class UsersSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const userRepository = dataSource.getRepository(Users);

    const userData = {
      name: "Rodolfo Fernandes",
      email: "rodolfo.fernandes@outlook.com",
      telephone: "13996882202",
      password: await bcrypt.hash("123456", 10),
    };
    const user = userRepository.create(userData);

    await userRepository.save(user);
  }
}
