import express from 'express';
import {userSignup,userLogin} from '../controler/usercontroler.js';  
import {getProducts,getProductByid} from "../controler/product-controler.js";
import { addPaymentGateway } from '../controler/payment-controller.js';


const router=express.Router();

router.post('/signup',userSignup);
router.post('/login', userLogin);
router.get("/products", getProducts);
router.get("/product/:id",getProductByid);
router.post("/payment", addPaymentGateway);
export default router;






