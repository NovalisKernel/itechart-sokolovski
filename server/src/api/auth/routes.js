import { Router } from 'express';
import { LoginController, RegController } from './controller';
import validation from '../../midleware/validation';
import regSchema from '../../midleware/validationLoginSchema';
import passport from '../../config/passport';

const router = Router();

// /login
router.post('/', passport.authenticate('local', { session: false }), LoginController);

router.post('/reg', validation(regSchema), RegController);

export default router;
