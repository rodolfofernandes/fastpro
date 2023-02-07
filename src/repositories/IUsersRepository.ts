import { Users } from "../database/entity/Users";

export interface IUsersRepository {
  save(user: Users): Promise<void>;
  findByEmail(email: string): Promise<any>;
}
