import { loginUser, regUser } from './service';

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const resObj = await loginUser(email, password);
    const { token, user } = resObj;
    console.log(user);
    res.status(200).json({ token, user });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const regController = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const newUser = await regUser(email, password, name);
    res.status(200).json({
      message: `Создан пользователь ${name} с email: ${email} и паролем ${newUser.password}`,
      email,
      password
    });
  } catch (e) {
    res.status(500).json({ message: e.message || 'Что-то пошло не так...' });
  }
};

export { loginController, regController };
