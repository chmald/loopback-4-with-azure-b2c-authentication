import { authenticate } from '@loopback/authentication';
import { get, param, HttpErrors } from '@loopback/rest';
import { AUTH_STRATEGY_NAME } from '../b2c.auth.strategy';
const jwt = require('jsonwebtoken');

export class MyController {
  constructor() { }

  @get('/whoami')
  @authenticate(AUTH_STRATEGY_NAME)
  async whoAmI(
    @param.header.string(`Authorization`) authHeader: string,
  ): Promise<string> {
    if (authHeader)
      return await jwt.decode(authHeader.split(' ')[1]);
    else
      throw new HttpErrors.Unauthorized(`Not Authorized.`);
  }
}
