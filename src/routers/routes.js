import  express  from "express";
import Controles from "../controllers/Controles.js";

const Router = express();

Router
    .get("/", Controles.ListaPost)
    .post("/", Controles.InsertPost)
    .delete("/:id", Controles.DeletePost)
    .put("/:id", Controles.UpdatePost)

export default Router;