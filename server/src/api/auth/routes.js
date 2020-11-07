import { Router } from 'express';
import { LoginController, RegController } from './controller';

const router = Router();

// /login
router.post('/', LoginController);

router.post('/reg', RegController);

export default router;
