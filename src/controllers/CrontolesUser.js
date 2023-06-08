import Users from "../models/User.js";
import {ValidaUser} from "../validacoes/validacoesUser.js";
import bcrypt, { hash } from 'bcrypt';
import { ObjectId } from "bson";

class ControlesUser{
    

    static InsertUsers = async (req, res, next)=>{
       const valida = await ValidaUser(req, res)
       if(valida == true){
            let NovoUsers = {
                name: req.body.name,
                email: req.body.email,
                senha: req.body.senha
            }
            bcrypt.genSalt(10, (erro, salt)=>{
                bcrypt.hash(NovoUsers.senha, salt, async(erro, hash)=>{
                    if(erro){
                        res.status(400).send({message: `houve um erro ao salvar usuario`})
                        .then(()=>console.log(erro))
                    }
                    NovoUsers.senha = hash
                    await Users.create(NovoUsers)
                        .then((resposta)=>res.status(200).send({message:"Usuario criado com sucesso", resposta}))
                        .catch ((erro=>res.status(400).send({message: "Erro ao criar usuario", erro})))
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