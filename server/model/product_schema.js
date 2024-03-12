import mongoose from "mongoose";
 const product_scheme = new mongoose.Schema({
   id: {
     type: String,
     required: true,
     unique: true,
   },
   url: String,
   detailurl: String,
   title: Object,
   price: Object,
   quantity: Number,
   description: String,
   discount: String,
   tagline: String,
   seller: String,
   offer: Object,
   Brand: String,
   Rating: String,
   delivery_charges:Number,
   category:String,
 });
 const Product=mongoose.model('products',product_scheme);
 export default Product;