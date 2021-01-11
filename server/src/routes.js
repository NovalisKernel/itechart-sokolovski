import { Router } from 'express';
import { version } from '../package.json';
import authRouter from './api/auth';
import contactsRouter from './api/contacts';
import passport from './config/passport';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'API',
    data: {
      version: `${version}`
    }
  });
});

router.use('/login', authRouter);
router.use('/contacts', passport.authenticate('jwt', { session: false }), contactsRouter);

export default router;
