import mongoose from "mongoose";

const post = new mongoose.Schema({
    titulo:{
        type: String, 
        required: [true,"O titulo e obrigatorio"]
    },
    descricao:{
        type: String,
         required:[true,"A descrição e obrigatoria"]
    },
    texto:{
        type: String,
         required:[true,"A descrição e obrigatoria"]
    },
},
{
    versionKey:false
});
const Posts = mongoose.model('Posts', post);
export default Posts;