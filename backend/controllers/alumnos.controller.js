import { modeloAlumnos } from "../models/alumnos.model.js";

modeloAlumnos.create(
    {
        name:"Leslie",
        apepat: "Arjona",
        apemat: "Aguilar",
        edad: 21,
        carerra: "TICS"
    },
    {
        name:"Tania",
        apepat: "Arjona",
        apemat: "Aguilar",
        edad: 26,
        carerra: "NEGOCIOS"
    }, 
    {
        name:"Juan",
        apepat: "Arjona",
        apemat: "Aguilar",
        edad: 28,
        carerra: "TICS"
    },
    {
        name:"Maria",
        apepat: "Arjona",
        apemat: "Aguilar",
        edad: 23,
        carerra: "TICS"
    }, {
        name:"Monica",
        apepat: "Arjona",
        apemat: "Aguilar",
        edad: 31,
        carerra: "TICS"
    }
);

export const test = ()=>{
    console.log("Se esta mandando a llamar correctamente el controlador")
}