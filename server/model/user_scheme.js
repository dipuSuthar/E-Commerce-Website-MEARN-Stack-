import mongoose from "mongoose";
 const userScheme=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20

    
 },
 lastname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20

    
 },
  username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true

    
 },
  email:{
        type:String,
        required:true,
        trim:true,
       unique:true,
       lowercase:true
    
 },
  password:{
        type:String,
        required:true,
        
    
 }
 ,
 phone:{
        type:String,
        required:true,
        max:10,
        min:10,
        
    
 }
 
 
 
}
 );
 const user=mongoose.model('user',userScheme);
 export default user;