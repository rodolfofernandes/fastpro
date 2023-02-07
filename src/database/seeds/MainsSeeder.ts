import { DataSource } from "typeorm";
import { runSeeder, SeederFactoryManager } from "typeorm-extension";
import { UsersSeeder } from "./UsersSeeder";

export class MainSeeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    await runSeeder(dataSource, UsersSeeder);
  }
}
