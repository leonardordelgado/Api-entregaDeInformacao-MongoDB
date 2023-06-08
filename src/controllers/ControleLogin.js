import AuthService from "../services/authService.js";
const authService = new AuthService();

class ControlesLogin{
    static async login(req, res){
        console.log(req)
        const {email, senha} = req.body
        try{
            const login = await authService.login({email,senha})
            res.status(200).send(login)
        }catch (erro){
            res.status(401).send({message:erro.message})
        }
    }
    
};

export default ControlesLogin;