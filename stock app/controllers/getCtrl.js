
import { Store } from "../models/storeModel.js";
import {Inventory} from "../models/inventoryModel.js"
import {Product} from "../models/productModel.js"
import {Seller} from "../models/sellerModel.js"
import {Deptor} from "../models/deptorModel.js"
import {Customer} from "../models/customerModel.js"
import { Incomming } from "../models/incommingModel.js";
import { Expense } from "../models/expenseModel.js";


const getCtrl ={

home:(req,res)=>{
	res.render("home");
} ,

dashboard:async(req,res)=>{

	let val=0;
	 Product.find({},(err,data)=>{
	 for(let i=0;i<data.length;i++){
		 val += data[i].price*data[i].quantity
		 console.log("the value is",data[i].price,data[i].quantity)
	 }
		console.log("the final value is",val)
	})

	let expense = 0;
  	Expense.find({status:"payed"},(err,foundexpense)=>{
		for(let i=0;i<foundexpense.length;i++){
			expense += foundexpense[i].price*foundexpense[i].amount
			console.log("the value of expense is",foundexpense[i].price,foundexpense[i].amount)
		}
		console.log("the final value is",expense)
		console.log("expense and stock",expense,val)
		res.render("dashboard",{stock:val,expense:expense})
	})


},

register:(req,res)=>{

	res.render("register")
},

login:(req,res)=>{
res.render("login")
},
product:(req,res)=>{
 let allproduct;
     Product.find({},(err,data)=>{
 allproduct = data;
	res.render("product",{allproducts:allproduct})
    });

},
supplier:(req,res)=>{
Seller.find({},(err,data)=>{
	res.render("supplier",{allsupplier:data})
});

},
incomming:(req,res)=>{
	Incomming.find({},(err,data)=>{
		res.render("Incomming",{allincomming:data})
	});

},
outgoing:(req,res)=>{
	res.render("outgoing")
},
deptor:(req,res)=>{
	Deptor.find({},(err,data)=>{
		res.render("deptor",{alldeptors:data})
	})
},
customer:(req,res)=>{
	Customer.find({},(err,data)=>{
		res.render("customer",{allcustomer:data})
	})
} ,
expense:(req,res)=>{
	let val=0;
	Expense.find({},(err,foundproducts)=>{
		for(let i=0;i<foundproducts.length;i++){
			val += foundproducts[i].price*foundproducts[i].amount
			console.log("the value is",foundproducts[i].price,foundproducts[i].amount)
		}
		res.render("expense",{allexpense:foundproducts,total:val})
	})

},
report:(req,res)=>{
	let allproduct;


	let val=0;
	Expense.find({},(err,foundproducts)=>{
		for(let i=0;i<foundproducts.length;i++){
			val += foundproducts[i].price*foundproducts[i].amount
			console.log("the value is",foundproducts[i].price,foundproducts[i].amount)
		}
		allproduct = foundproducts
	})

	let profit =0;
	Expense.find({sold:"sold"},(err,foundproducts)=>{
		for(let i=0;i<foundproducts.length;i++){
			profit += foundproducts[i].price*foundproducts[i].amount
			console.log("the value is",foundproducts[i].price,foundproducts[i].amount)

		}
console.log("final value of profit after loop",profit)
		console.log("profit",profit,"value of exp",val)
		profit = profit - val
console.log("final value of profit after sub",profit)

		res.render("report",{allproducts:allproduct,profit:profit})
	})

} 

}

export default getCtrl;
