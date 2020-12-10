import passport from 'passport';
import LocalStrategy from 'passport-local';
import logger from './winston';
import User from '../models/User';
import config from './default.json';
import bcrypt from 'bcrypt';
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      try {
        const user = await User.findOne({
          where: { email }
        });

        if (user) {
          // const isMatch = await bcrypt.comparePassword(password, user.password);
          const isMatch = await bcrypt.compare(password, user.password);
          if (isMatch) return done(null, user);
          return done(null, false);
        }
        return done(null, false);
      } catch (err) {
        logger.error('passport local strategy error', err);
        return done(err, false);
      }
    }
  )
);

passport.use(
  'jwt',
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwtSecret,
      jsonWebTokenOptions: {
        maxAge: config.jwtTimeToLive
      }
    },
    async (payload, done) => {
      try {
        const { id } = payload;
        const user = await User.findOne({
          where: { id }
        });
        if (!user) return done(null, false);
        return done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

export default passport;
