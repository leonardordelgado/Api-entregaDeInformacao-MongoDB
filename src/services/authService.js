import Users from '../models/User.js'
import bcrypt from 'bcrypt'
import sign from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()


class AuthService {
    async login(dto) {
        const usuario = await Users.findOne({ attributes: ['id', 'email', 'senha'], where: { email: dto.email } })


        if (!usuario){ throw new Error('Usuario não cadastrado')}

        const senhas = await bcrypt.compare(dto.senha, usuario.senha)

        if (!senhas) { throw new Error("Usuario ou senha Invalida")}

        const accestoken = sign.sign({
            id: usuario.id,
            email: usuario.email
        },
            process.env.SECRET,{ 
                expiresIn: 1800 
            }
        )
        return { accestoken }
    }
}
export default AuthService