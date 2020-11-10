import { Router } from 'express';
import { version } from '../package.json';
import authRouter from './api/auth';
import contactsRouter from './api/contacts';

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
router.use('/contacts', contactsRouter);

export default router;
