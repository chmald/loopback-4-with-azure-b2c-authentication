import { StrategyAdapter } from '@loopback/authentication-passport';
import { BearerStrategy } from 'passport-azure-ad';
import { config } from './b2c.config';

function verify(token: any, done: Function) {
  const profile: any = token;
  profile.email = profile.emails[0];
  profile.provider = profile.idp;
  done(null, profile);
}

const b2cStrategy = new BearerStrategy(config, verify);

export const AUTH_STRATEGY_NAME = 'azureb2c';

export const b2cAuthStrategy = new StrategyAdapter(
  b2cStrategy,
  AUTH_STRATEGY_NAME
);
