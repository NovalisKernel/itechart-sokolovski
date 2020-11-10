import { Router } from 'express';
import {
  GetContactsController,
  AddContactsController,
  ChangeContactsController,
  DeleteContactsController
} from './controller';

const router = Router();

// /contacts
router.get('/', GetContactsController);

router.post('/', AddContactsController);
router.put('/', ChangeContactsController);
router.delete('/', DeleteContactsController);

export default router;
