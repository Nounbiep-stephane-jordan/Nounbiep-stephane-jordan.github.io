import { Router as expressRouter} from "express";
import { storeCtrl } from "../controllers/storeCtrl.js";
import getCtrl from "../controllers/getCtrl.js"
import verifytoken from "../middleware/auth.js"
const storeRouter = expressRouter()




storeRouter.post("/creatstore",storeCtrl.createStore );

storeRouter.delete("/deletestore",storeCtrl.deletestore);

storeRouter.patch("/updatestorename",storeCtrl.updatestorename);

storeRouter.post("/addinventory",storeCtrl.addinventory);

// storeRouter.post("/addproduct",storeCtrl.addproduct );
//
storeRouter.post("/addproduct",storeCtrl.addproduct);
//

storeRouter.post("/removeproduct",storeCtrl.removeproduct );

storeRouter.post("/addseller" ,storeCtrl.addseller);

storeRouter.post("/removeseller",storeCtrl.removeseller );

storeRouter.post("/adddeptor",storeCtrl.adddeptor);

storeRouter.post("/cleardept",storeCtrl.cleardept);

storeRouter.post("/addcustomer",storeCtrl.addcustomer);
storeRouter.post("/removecustomer",storeCtrl.removecustomer);

storeRouter.post("/addincomming",storeCtrl.addincomming);
storeRouter.post("/removeincomming",storeCtrl.removeincomming);




 storeRouter.get("/home",getCtrl.home);
 storeRouter.get("/dashboard",verifytoken,getCtrl.dashboard);
storeRouter.get("/register",getCtrl.register);
storeRouter.get("/login",getCtrl.login);
storeRouter.get("/product",verifytoken,getCtrl.product);
storeRouter.get("/supplier",verifytoken,getCtrl.supplier);
storeRouter.get("/customer",verifytoken,getCtrl.customer);
storeRouter.get("/incomming",verifytoken,getCtrl.incomming);
storeRouter.get("/outgoing",verifytoken,getCtrl.outgoing);
storeRouter.get("/deptor",verifytoken,getCtrl.deptor);
storeRouter.get("/expense",verifytoken,getCtrl.expense);
storeRouter.get("/report",verifytoken,getCtrl.report);
 



export default storeRouter;
