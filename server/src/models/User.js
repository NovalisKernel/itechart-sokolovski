import { Sequelize } from 'sequelize';

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          notNull: true
        },
        email: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        }
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'users',
        schema: 'public'
      }
    );
  }
}

export default User;
