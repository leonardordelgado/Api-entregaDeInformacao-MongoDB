import  express  from "express";
const RouterLogin = express();
import ControlesLogin from "../controllers/ControleLogin.js";

RouterLogin
    .post("/admin/login", ControlesLogin.login)


export default RouterLogin;