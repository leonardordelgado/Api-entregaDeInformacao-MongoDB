import Posts from "../models/Posts.js";


import { ObjectId } from "bson";
class Controles{
    static ListaPost = async(req, res, next)=>{
        try{
            await Posts.find()
                .then((resposta)=>{
                    res.status(200).json(resposta)
                })
        }catch (erro){
            res.status(500).send(erro)
        }
    };
    static InsertPost = async (req, res, next)=>{
        try{
            const existe = await Posts.findOne({titulo: req.body.titulo})
            
            if(existe == null){
                let post = new Posts(req.body)
                await post.save()
                    .then((resposta)=>{
                        res.status(201).json(resposta)
                    })
            }else{
                res.status(400).send({message: "Ja existe post com esse titulo"})
            }
        }catch (erro){
            res.status(500).send(erro)
        }
    };
    static DeletePost = async (req, res, next)=>{
        try{
            const filter = {_id: new ObjectId(`${req.params.id}`)}
            Posts.findByIdAndDelete(filter)
                .then((resposta)=>{
                    res.status(200).send({message:"Poste deletado com sucesso",resposta: resposta})
                })
                .catch((err)=>{res.status(500).send({message:`${err.message}`})})
                
        }catch (erro){

        }
    };
    static UpdatePost = async (req ,res, next)=>{
        try{
            const filter = {_id: new ObjectId(`${req.params.id}`)}
            await Posts.findByIdAndUpdate(filter, {$set: req.body})
                .then((resposta)=>{
                    res.status(200).send({message:'Post atualizado com sucesso',resposta})
            })
            .catch((erro)=>{
                res.status(403).send({message:'Post nao pode ser atualizado',erro})
            })
        }catch (erro){
            res.status(500).send(erro)
        }
    };  
};

export default Controles;