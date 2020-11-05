import { Router } from 'express';
import { version } from '../package.json';
import authRouter from './api/auth';

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

router.use('/login',authRouter);

export default router;
