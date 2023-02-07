import { MysqlUserRepository } from "../../../providers/mysql/MysqlUserRepository";
import { CreateUserController } from "./CreateUser.controller";
import { CreateUserService } from "./CreateUser.service";
import { AppDataSource } from "../../../database/data-source";

const mysqlUserRepository = new MysqlUserRepository(AppDataSource);

const createUserService = new CreateUserService(mysqlUserRepository);

const createUserController = new CreateUserController(createUserService);

export { createUserController, createUserService, mysqlUserRepository };
