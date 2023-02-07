export interface IJwtRepository {
  generateToken(payload: any): Promise<string>;
  validateToken(token: string): Promise<any>;
}
