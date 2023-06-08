import {Sequelize} from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

function dbConect(){
    if(process.env.NODE_ENV == "production"){
      return new Sequelize(process.env.DB_DATABASE_PRODUCTION,process.env.DB_USER_PRODUCTION,process.env.DB_PASSWORD_PRODUCTION,{
        host:process.env.DB_HOST_PRODUCTION,
        dialect:'mysql'
      })
    }else{
        return  new Sequelize(process.env.DB_DATABASE,process.env.DB_USER,process.env.DB_PASSWORD,{
          host:process.env.DB_HOST,
           dialect:'mysql'
       });
    }
  }
  
  const dbMysql = dbConect()
   try {
      await dbMysql.authenticate();
      console.log('Conexão com a base de dados de usuario realizada com sucesso.');
    } catch (error) {
      console.error('Erro na conexão:', error);
    }
    
  export default dbMysql