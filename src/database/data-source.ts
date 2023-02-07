import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import "dotenv/config";
import { MainSeeder } from "./seeds/MainsSeeder";

const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [__dirname + "/entity/*.ts"],
  migrations: [__dirname + "/migrations/*.ts"],
  seeds: [MainSeeder],
  factories: [__dirname + "/factories/*.ts"],
  subscribers: [],
};

export const AppDataSource = new DataSource(options);
