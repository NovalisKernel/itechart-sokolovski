import Contacts from '../../models/Contacts';
import sequelize from 'sequelize';

// const getContacts = async () => {
//   const contacts = await Contacts.findAll({
//     raw: true,
//     nest: true,
//     order: sequelize.literal('id')
//   });
//   const countOfCOntacts = contacts.length;
//   return { contacts, countOfCOntacts };
// };

const getContacts = async (page, count) => {
  const allContacts = await Contacts.findAll({
    raw: true,
    nest: true,
    order: sequelize.literal('id')
  });

  const contacts = await Contacts.findAll({
    limit: count,
    raw: true,
    nest: true,
    offset: count * (page - 1),
    order: sequelize.literal('id')
  });
  const countOfCOntacts = allContacts.length;
  return { contacts, countOfCOntacts };
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
  const allContacts = await Contacts.findAll({
    raw: true,
    nest: true,
    order: sequelize.literal('id')
  });
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
  const allContacts = await Contacts.findAll({
    raw: true,
    nest: true,
    order: sequelize.literal('id')
  });
  return allContacts;
};

const deleteContact = async id => {
  await Contacts.destroy({ where: { id } });
  const allContacts = await Contacts.findAll({
    raw: true,
    nest: true,
    order: sequelize.literal('id')
  });
  const countOfCOntacts = allContacts.length;
  return { allContacts, countOfCOntacts };
};

export { getContacts, addContact, changeContact, deleteContact };
