import { JwtRepository } from "../providers/jwt/JwtRepository";

const jwtRepository = new JwtRepository();

const authMiddleware = new AuthMiddleware(jwtRepository);

export { authMiddleware };
