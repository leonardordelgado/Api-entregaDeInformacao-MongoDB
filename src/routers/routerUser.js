import  express  from "express";
import ControlesUser from "../controllers/CrontolesUser.js";
const RouterUser = express();

RouterUser
    .post("/userAdd", ControlesUser.InsertUsers)


export default RouterUser;