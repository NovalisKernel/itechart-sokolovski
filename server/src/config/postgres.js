import { Sequelize } from 'sequelize';
import config from './environment';
import logger from './winston';
import User from '../models/User';
import Contacts from '../models/Contacts';

const { postgres } = config;

export const sequelize = new Sequelize(
  'postgres://postgres:123456@localhost:5432/postgres',
  {
    logging: false,
    dialectOptions: {}
  }
);

export default async function initializeDbPostgres(callback) {
  try {
    await sequelize.authenticate();
    logger.info(
      `Postgre: Connection has been established successfully to ${sequelize.config.host}`
    );

    const models = {
      User: User.init(sequelize),
      Contacts: Contacts.init(sequelize)
    };

    Object.values(models).forEach(model => {
      if (typeof model.associate === 'function') model.associate(models);
    });

    await sequelize.sync();
    return callback(sequelize);
  } catch (err) {
    logger.error('Sequelize: Unable to connect to the database: ' + err.toString());
    process.exit(1);
  }
}
