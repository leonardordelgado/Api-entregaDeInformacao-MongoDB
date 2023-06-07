import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

async function connect(){
    try{
      await  mongoose.connect(process.env.URL_MONGODB)
        .then(()=>console.log("Conexão com o banco realizada com sucesso "))
    }catch (erro){
        console.log("Houve um erro ao conectar ao banco de dados", erro)
    };
}
connect()


let db = mongoose.Collection;

export default db;