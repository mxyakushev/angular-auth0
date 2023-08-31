type Environment = {
  production: boolean;
  appUrl: string;
  auth0domain: string;
  auth0clientId: string;
}

export const environment: Environment = {
  production: false,
  appUrl: 'http://localhost:4200/',
  auth0domain: 'dev-w5u028to6cpf2ozx.us.auth0.com',
  auth0clientId: '6zipfc82zjlrLGRrzi8Qn9tPRoWZodDM'
};
