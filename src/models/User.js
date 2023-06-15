import mongoose from "mongoose";

const users = new mongoose.Schema({
    name:{
        type: String, 
        required: [true,"O titulo e obrigatorio"]
    },
    email:{
        type: String,
         required:[true,"A descrição e obrigatoria"]
    },
    senha:{
        type: String,
         required:[true,"O texto e obrigatorio"]
    },
    

},
{
    versionKey:false
});
const Users = mongoose.model('Users', users);
export default Users;