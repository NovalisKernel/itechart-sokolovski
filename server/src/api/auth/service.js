import { User } from '../../models/User';
import { bcrypt } from 'bcrypt';


const loginUser = async (email,password)=>{
    
    const user = await User.findOne({ where: { email }, raw: true, nest: true })
    if (!user) {
        throw new Error('Пользователь не найден');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Неверный пароль');
    }

    const token = jwt.sign(
        {
            userName:user.name
        },
        config.get('jwtSecret'),
        {expiresIn:'1h'}
    )
    
    return token
}

export {loginUser};