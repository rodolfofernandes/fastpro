import { IJwtRepository } from "../../repositories/IJwtRepository";
import jwt from "jsonwebtoken";
import "dotenv/config";

export class JwtRepository implements IJwtRepository {
  async generateToken(payload: any): Promise<string> {
    return jwt.sign({ payload }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
  }

  async validateToken(token: string): Promise<any> {
    return jwt.verify(token, process.env.JWT_SECRET);
  }
}
