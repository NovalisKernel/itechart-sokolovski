import { Router } from 'express';
import LoginConroller from './controller';


const router = Router();

// /login
router.post(
    '/',
    LoginConroller
  );

  export default router;