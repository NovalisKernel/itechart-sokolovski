import { Sequelize } from 'sequelize';

class Contacts extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          notNull: true
        },
        name: {
          type: Sequelize.STRING
        },
        job: {
          type: Sequelize.STRING
        },
        decision: {
          type: Sequelize.STRING
        },
        promoter: {
          type: Sequelize.STRING
        },
        level: {
          type: Sequelize.STRING
        },
        relatOwner: {
          type: Sequelize.STRING
        },
        topics: {
          type: Sequelize.TEXT
        }
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'contacts',
        schema: 'public'
      }
    );
  }
}

export default Contacts;
