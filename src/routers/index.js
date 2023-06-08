import express from "express";
import router from "./routes.js"
import RouterUser from "./routerUser.js";
import RouterLogin from "./routerLogin.js"


const routes = (App)=>{
    App.use(express.json(),
    RouterLogin,
    RouterUser,
    router
    )

};
export default routes;