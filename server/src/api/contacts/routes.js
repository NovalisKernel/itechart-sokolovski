import { Router } from 'express';
import passport from '../../config/passport';
import {
  getContactsController,
  addContactsController,
  changeContactsController,
  deleteContactsController
} from './controller';

const router = Router();

// /contacts
router.get('/', getContactsController);

router.post('/', addContactsController);
router.put('/', changeContactsController);
router.delete('/', deleteContactsController);

export default router;
