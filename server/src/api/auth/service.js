import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config/default.json';

const loginUser = async (email, password) => {
  const jwtSecret = config.jwtSecret;

  const user = await User.findOne({ where: { email }, raw: true, nest: true });
  if (!user) {
    throw new Error('Пользователь не найден');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Неверный пароль');
  }

  const token = jwt.sign(
    {
      userName: user.name,
      id: user.id
    },
    jwtSecret,
    { expiresIn: '1h' }
  );
  const resObj = {
    token,
    user: user.name
  };
  return resObj;
  // return token;
};

const regUser = async (email, password, name) => {
  const candidate = await User.findOne({ where: { email }, raw: true, nest: true });
  if (candidate) {
    throw new Error('Пользователь уже существует');
  }
  const hashPassword = await bcrypt.hash(password, 12);
  const user = await User.create({ email, password: hashPassword, name });
  await user.save();
  return user;
};

export { loginUser, regUser };
