import express from 'express';
 import DefaultData from './default.js';

import bodyParser from 'body-parser';
import Connection from "./database/db.js";
import dotenv from 'dotenv';
import Router from "./routes/route.js";
import cors from 'cors'; 
import {v4 as uuid} from 'uuid'




 const app = express();
 dotenv.config();
 app.use(cors());
 app.use(bodyParser.json({extended:true}));
 app.use(bodyParser.urlencoded({extended:true}))
 app.use('/',Router);
 const PORT=8000;
 const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
 Connection(USERNAME,PASSWORD);
 app.listen(PORT,()=> console.log('server is running  port 8000'));
DefaultData()
export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams={};
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["PAYTM_CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["PAYTM_INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"] = uuid();
paytmParams['CUST_ID']=process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"] = '100';
paytmParams["CALLBACK_URL"] ="http://localhost:8000/callback";
paytmParams["EMAIL"] = "admin123@gmail.com";
paytmParams["MOBILE_NO"] = "21234567891";

