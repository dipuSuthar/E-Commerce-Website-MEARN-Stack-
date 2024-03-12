import mongoose from "mongoose";



export const Connection= async(username,password) =>{
   const URL=`mongodb+srv://${username}:${password}@e-kart1.dvb4nyt.mongodb.net/?retryWrites=true&w=majority`;
      // const URL = `mongodb+srv://<username>:<password>@e-kart1.dvb4nyt.mongodb.net/?retryWrites=true&w=majority`;
      try {
         mongoose.set("strictQuery",false);
        await mongoose.connect(URL,{useNewUrlParser: true,
            useUnifiedTopology: true,});
         console.log ('database connect sucessfully');
      } catch (error) {
        console.log ('error while connecting',error.message);

        
      }
}
export default Connection;