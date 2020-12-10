import { Router } from 'express';
import passport from '../../config/passport';
import {
  GetContactsController,
  AddContactsController,
  ChangeContactsController,
  DeleteContactsController
} from './controller';

const router = Router();

// /contacts
router.get('/', passport.authenticate('jwt', { session: false }), GetContactsController);

router.post('/', passport.authenticate('jwt', { session: false }), AddContactsController);
router.put(
  '/',
  passport.authenticate('jwt', { session: false }),
  ChangeContactsController
);
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  DeleteContactsController
);

export default router;
