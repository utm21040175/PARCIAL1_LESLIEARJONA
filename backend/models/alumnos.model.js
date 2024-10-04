import{Schema, model} from "mongoose"


const EsquemaAlumnosRep = new Schema({
    name:{
        type: String
    },
    apepat:{
        type: String
    },
    apemat:{
        type: String
    },
    edad:{
        type: Number
    },
    carrera: {
        type: String
    }
})


//REUTILIZAR ESQUEMAS 
export const modeloAlumnos = new model("Alumnos reprobados", EsquemaAlumnosRep);