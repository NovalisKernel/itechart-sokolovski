import Contacts from '../../models/Contacts';
import sequelize from 'sequelize';

const { in: $in } = sequelize.Op;

// const getContacts = async () => {
//   const contacts = await Contacts.findAll({
//     raw: true,
//     nest: true,
//     order: sequelize.literal('id')
//   });
//   const countOfCOntacts = contacts.length;
//   return { contacts, countOfCOntacts };
// };

const getContacts = async (page, count, levels = [], promoters = [], decisions = []) => {
  let applyFiltering = false;
  const where = {};
  if (levels.length > 0) {
    where.level = { [$in]: levels };
    applyFiltering = true;
  }
  if (promoters.length > 0) {
    where.promoter = { [$in]: promoters };
    applyFiltering = true;
  }
  if (decisions.length > 0) {
    where.decision = { [$in]: decisions };
    applyFiltering = true;
  }

  const countOfCOntacts = await Contacts.count({
    raw: true,
    nest: true,
    order: sequelize.literal('id'),
    where: applyFiltering ? where : null
  });
  const contacts = await Contacts.findAll({
    limit: count,
    raw: true,
    nest: true,
    offset: count * (page - 1),
    order: sequelize.literal('id'),
    where: applyFiltering ? where : null
  });

  return { contacts, countOfCOntacts };
};

const addContact = async (
  name,
  job,
  decision,
  promoter,
  level,
  relationship,
  topics,
  page = 1,
  count = 3
) => {
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
  console.info('PAGE', page);
  console.info('COUNT', count);
  return await getContacts(page, count);
  // const allContacts = await Contacts.findAll({
  //   limit: count,
  //   offset: count * (page - 1),
  //   raw: true,
  //   nest: true,
  //   order: sequelize.literal('id')
  // });
  // return allContacts;
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
