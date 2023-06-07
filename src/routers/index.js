import express from "express";
import router from "./routes.js"
const routes = (App)=>{
    App.use(express.json(),
    router)

};
export default routes;