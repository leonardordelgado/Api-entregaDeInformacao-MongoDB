import express  from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import db from "./src/db/conetionDB.js";
import routes from "./src/routers/index.js";

const App = express();

//segurança cabeçalho de envio de informções
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
App.use(allowCrossDomain);

//configurações adicionais
dotenv.config();
routes(App)

//middleware
App.use(express.urlencoded({ extended: true}))
App.use(bodyParser.json());
App.use(express.json());

//inicio do servidor para a porta especiicada em .env
App.listen(process.env.PORT_SERVER,
    ()=> console.log(`Servidor rodando na porta ${process.env.PORT_SERVER}`));