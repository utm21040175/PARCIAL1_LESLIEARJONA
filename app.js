import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv"
import cors from "cors";

import {test} from "./backend/controllers/alumnos.controller.js"

dotenv.config();

//CONEXION A LA BASE DE DATOS 
mongoose.connect(process.env.urldb)
.then(()=>{ 
    console.log("Funciona la conexion")
})
.catch((error)=>{
    console.log("No funciona la conexion", error)
});

//crear un servidor local 
const app = express();
app.use(cors()); //seguridad del servidor local

app.listen(4000, ()=>{
    console.log("Se escucha correctamente")
})

test()