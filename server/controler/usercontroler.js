import User from '../model/user_scheme.js';



export const userSignup=async(request,response)=>{
 try {
    const exist=await User.findOne({username:request.body.username});
    if(exist){
      return response.status(401).json({message:'username already exits'})
    }
   
   const userdata=request.body;
   console.log(userdata);
    const newUser=new User(userdata);
    await newUser.save();
    response.status(200).json({message:userdata});
   //  console.log(first)


 } catch (error) {
    response.status(500).json({message:error.message});
 }
}

export const userLogin=async(request,response)=>{
   try {
      const username=request.body.username;
      const password=request.body.password;
      let user=await User.findOne({username:username,password:password})
      if (user) {
         return response.status(200).json({data:user});
      }
      else{
         return response.status(401).json(`Invalid login`)
      }
   } catch (error) {
      response.status(500).json('error',error.message)
       return error.response;
   };
}