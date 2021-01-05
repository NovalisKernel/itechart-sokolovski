import { getContacts, addContact, changeContact, deleteContact } from './service';

const getContactsController = async (req, res) => {
  try {
    const contacts = await getContacts();
    res.json(contacts);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const addContactsController = async (req, res) => {
  try {
    const { name, job, decision, promoter, level, relationship, topics } = req.body;
    const allContacts = await addContact(
      name,
      job,
      decision,
      promoter,
      level,
      relationship,
      topics
    );
    // res.json({ message: `Создан новый контакт ${name}`, contacts: allContacts });
    res.json(allContacts);
  } catch (e) {
    res.status(500).json({ message: e.message || 'Что-то пошло не так...' });
  }
};

const changeContactsController = async (req, res) => {
  try {
    const { id, name, job, decision, promoter, level, relationship, topics } = req.body;
    const allContacts = await changeContact(
      id,
      name,
      job,
      decision,
      promoter,
      level,
      relationship,
      topics
    );
    // res.json({ message: `Изменен контакт ${name}`, contacts: allContacts });
    res.json(allContacts);
  } catch (e) {
    res.status(500).json({ message: e.message || 'Что-то пошло не так...' });
  }
};

const deleteContactsController = async (req, res) => {
  try {
    const { id } = req.body;
    const allContacts = await deleteContact(id);
    // res.json({ message: `Удален контакт с id=${id}`, contacts: allContacts });
    res.json(allContacts);
  } catch (e) {
    res.status(500).json({ message: e.message || 'Что-то пошло не так...' });
  }
};

export {
  getContactsController,
  addContactsController,
  changeContactsController,
  deleteContactsController
};
