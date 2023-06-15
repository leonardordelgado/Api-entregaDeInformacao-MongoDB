import Users from "../models/User.js";
import {ValidaUser} from "../validacoes/validacoesUser.js";
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv'
dotenv.config()

class ControlesUser{
    

    static InsertUsers = async (req, res, next)=>{
       const valida = await ValidaUser(req, res)
       
       if(valida == true){
            let NovoUsers = {
                name: req.body.name,
                email: req.body.email,
                senha: req.body.senha
            }
            
                bcrypt.genSalt(Number(process.env.SALT), (erro, salt)=>{
                    bcrypt.hash(NovoUsers.senha, salt, async(erro, hash)=>{
                  
                        if(erro){
                            res.status(400).send({message: `houve um erro ao salvar usuario`})
                            console.log(erro)
                            next
                        }else{
                            NovoUsers.senha = hash
                            let use = new Users(NovoUsers)
                            await use.save()
                                .then((resposta)=>res.status(200).send({message:"Usuario criado com sucesso", resposta}))
                                .catch ((erro=>res.status(400).send({message: "Erro ao criar usuario", erro})))
                        } 
                    })
                })
            
        }else if(valida.length > 0){
            res.status(400).send(valida)
        }else if(valida == false){
            res.status(400).send({message:"Usuario ja Exite"})
        }
    };
};

export default ControlesUser;