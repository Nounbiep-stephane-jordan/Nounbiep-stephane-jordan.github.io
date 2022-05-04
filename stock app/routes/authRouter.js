import { Router as expressRouter} from "express";
import authCtrl from "../controllers/authCtrl.js"


const router = expressRouter()
router.post("/register",authCtrl.registerCtrl);

router.post("/login",authCtrl.loginCtrl);


// import { storeCtrl } from "../controllers/storeCtrl.js";


 
// router.post("/creatstore",storeCtrl.createStore );

// router.delete("/deletestore",storeCtrl.deletestore);

// router.patch("/updatestorename",storeCtrl.updatestorename);

// router.post("/addproduct" );

// router.post("/removeproduct" );

// router.post("/addseller" );

// router.post("/removeseller" );

 

export default router;

