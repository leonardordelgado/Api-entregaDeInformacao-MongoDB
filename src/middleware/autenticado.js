import jwt from 'jsonwebtoken'
import * as dotenv from "dotenv";
dotenv.config()
export default async (req, res, next)=>{
    if(req.body.length == 0){
        res.status(401).send({message: "Preencha todos os campos"})
    }
    const token = req.headers.authorization
    if(!token){
      return  res.status(401).send('Usuario não autorizado')
    }else{
        const [, accestoken] = token.split(" ")
        try {
            jwt.verify(accestoken,process.env.SECRET)
            
            const {id, email}= await jwt.decode(accestoken)
            req.usuarioId = id
            req.usuarioEmail = email        
            return next()
        } catch (error) {
            res.status(401).send('Usuario não autorizados')
        }
    }
}

