import { loginUser, regUser } from './service';

const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.json({ token });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const RegController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await regUser(email, password);
    res.json({ message: `Создан пользователь ${email} и паролем ${newUser.password}` });
  } catch (e) {
    res.status(500).json({ message: e.message || 'Что-то пошло не так...' });
  }
};

export { LoginController, RegController };
