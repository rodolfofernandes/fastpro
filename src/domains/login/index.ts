import { AuthLoginController } from "./Login.controller";
import { MysqlUserRepository } from "../../providers/mysql/MysqlUserRepository";
import { AuthLoginService } from "./Login.service";
import { JwtRepository } from "../../providers/jwt/JwtRepository";
import { AuthRepository } from "../../Authentication/AuthRepository";
import { AppDataSource } from "../../database/data-source";

const usersRepository = new MysqlUserRepository(AppDataSource);
const jwtRepository = new JwtRepository();
const authRepository = new AuthRepository(usersRepository);

const authLoginService = new AuthLoginService(authRepository, jwtRepository);

const authLoginController = new AuthLoginController(authLoginService);

export { authLoginController, authLoginService, jwtRepository, authRepository };
