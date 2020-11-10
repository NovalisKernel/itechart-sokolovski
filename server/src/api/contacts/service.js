import Contacts from '../../models/Contacts';

const getContacts = async () => {
  const contacts = await Contacts.findAll({ raw: true, nest: true });
  console.log(contacts);
  return contacts;
};

const addContact = async (name, job, decision, promoter, level, relationship, topics) => {
  const candidate = await Contacts.findOne({
    where: { name, job, decision, promoter, level, relatOwner: relationship },
    raw: true,
    nest: true
  });
  if (candidate) {
    throw new Error('Контакт уже существует');
  }
  const contact = await Contacts.create({
    name,
    job,
    decision,
    promoter,
    level,
    relatOwner: relationship,
    topics
  });
  await contact.save();
  const allContacts = await Contacts.findAll({ raw: true, nest: true });
  return allContacts;
};

const changeContact = async (
  id,
  name,
  job,
  decision,
  promoter,
  level,
  relationship,
  topics
) => {
  const contact = await Contacts.update(
    { name, job, decision, promoter, level, relatOwner: relationship, topics },
    { where: { id } }
  );
  const allContacts = await Contacts.findAll({ raw: true, nest: true });
  return allContacts;
};

const deleteContact = async id => {
  const contact = await Contacts.destroy({ where: { id } });
  const allContacts = await Contacts.findAll({ raw: true, nest: true });
  return allContacts;
};

export { getContacts, addContact, changeContact, deleteContact };
