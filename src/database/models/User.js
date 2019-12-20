import { Schema, model } from 'mongoose';
import { Genero, Estado } from '../enums';

const UserSchema = new Schema({
    nombre_completo: {
        type:String,
        required:true,
        lowercase: true
    },
    fecha_nacimiento:{
        type:Date,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:false
    },
    miniatura:{
        type:String,
        required:false
    },
    peso:{
        type:Number,
        required:true
    },
    altura:{
        type:Number,
        required:true
    },
    genero:{
        type:String,
        enum: Genero,
        default:Genero[0],
        required:true
    },
    estado:{
        type:String,
        enum:Estado,
        default:Genero[0],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true 
    },
    password:{
        type:String,
        required:true
    }
},
    { timestamps: { createdAt: true } }
);

export default model('User', UserSchema);