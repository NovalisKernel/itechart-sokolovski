import { Router } from 'express';
import { loginController, regController } from './controller';
import validation from '../../midleware/validation';
import regSchema from '../../midleware/validationLoginSchema';
import passport from '../../config/passport';

const router = Router();

// /login
router.post('/', passport.authenticate('local', { session: false }), loginController);

router.post('/reg', validation(regSchema), regController);

export default router;
