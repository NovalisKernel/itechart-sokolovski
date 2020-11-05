import {loginUser} from './service';

const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await loginUser(email,password);
        res.json({token});
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так. Попробуйте снова' })
    }
}

export default LoginController;