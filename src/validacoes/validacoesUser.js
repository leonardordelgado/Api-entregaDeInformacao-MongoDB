import Users from "../models/User.js"

export async function ValidaUser(req, res){
    const erros = []
    if(!req.body.name || typeof req.body.name == undefined || req.body.name == null){
        erros.push({texto: "Nome inválido"})
    }
    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        erros.push({texto: "Email inválido"})
    }
    if(req.body.email != req.body.repiteEmail){
        erros.push({texto: "E-mail não coincide"})
    }
    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null || req.body.senha.length < 4){
        erros.push({texto: "Senha muito Curta "})
    }
    if(req.body.senha != req.body.repitaSenha){
        erros.push({texto: "Senhas não coincidem"})
    }
    if(erros.length > 0){
       return erros
    }else{
        const user =  await Users.findOne({where:{email: req.body.email}})
        if(user == null){
            return true
        }else{
            return false
        }
    }
}


