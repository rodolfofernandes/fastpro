export interface IauthLoginRepository {
  validatePassword(email: string, password: string): Promise<any>;
}
