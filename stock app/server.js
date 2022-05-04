import express from 'express';
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import router from './routes/authRouter.js';
import mongoose from 'mongoose';
import storeRouter from './routes/storeRouter.js';

const app = express();
const port = 8000||3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));
 app.set("view engine","ejs");

 mongoose.connect("mongodb://localhost:27017/stockDB");

 app.use("/auth",router);
 app.use("/",storeRouter);
 
 




app.get('/', (req, res) => res.send('Hello World!'))







//  <% allproducts.map((product,index)=>{ %>
//     <tr>
//     <td>product.name</td>
//     <td>product.price</td>
//     <td>product.quantity</td>
//   </tr>
 
// <% }) %>










app.listen(port, () => console.log(`Example app listening on port ${port}!`));