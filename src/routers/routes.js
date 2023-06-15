import  express  from "express";
import Controles from "../controllers/Controles.js";
import autenticado from '../middleware/autenticado.js';

const Router = express();


Router
    .get("/", Controles.ListaPost)
    .use(autenticado)
    .post("/", Controles.InsertPost)
    .delete("/:id", Controles.DeletePost)
    .put("/:id", Controles.UpdatePost)

export default Router;

