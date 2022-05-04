import pkg from "dotenv";
const dotenv = pkg
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jsonwebtoken from 'jsonwebtoken';
import { Store } from "../models/storeModel.js";
import {Inventory} from "../models/inventoryModel.js"
import {Product} from "../models/productModel.js"
import {Seller} from "../models/sellerModel.js"
import {Deptor} from "../models/deptorModel.js"
import {Customer} from "../models/customerModel.js"
import  {Incomming} from "../models/incommingModel.js"
import  {Expense} from "../models/expenseModel.js"



let storeID = 0;
export const storeCtrl = {

    createStore:(req,res)=>{
        const {name} = req.body;
      Store.findOne({name:name},(err,result)=>{
          console.log(result)
           // if(result){res.json({message:"store name already exist"})}
           if(result){console.log("store name already exist")}
       });

       const newStore = new Store({
           name:name,
           storeID:storeID++
       });
       newStore.save((err)=>{
        if(err){
            console.log(err)
        } else {
              res.redirect("/dashboard")
        }
    });



    } ,

    deletestore:(req,res)=>{
const {name}=req.body
       Store.deleteOne({name:name},(err)=>{
          if(err){
              res.send(err)
          } else {
            res.redirect("/home")

          }
      });

    },

    updatestorename:(req,res)=>{
        const {name,newname,storeID} = req.body;
        console.log(name,newname)
        Store.updateOne({name:name},{$set:{name:newname}},(err)=>{
            if(err){
                console.log(err)
            } else {
                  res.redirect("/home")


            }
        })

    } ,

    addinventory:(req,res)=>{
        const {name,storeID,InventoryID} = req.body;
        console.log(req.body)
        const newInventory = new Inventory({
            name:name
        });

        newInventory.save((err)=>{
            if(err){
                console.log(err)
            }  else{
                res.send("sucessfully added to inventory")
            }
        });




    },

    addproduct:(req,res)=>{
        const {name,date,price,quantity,uInventoryID,storeID,status} = req.body
 let dates = new Date().toLocaleDateString()

const newexpense = new Expense({
    goodname:name,price:price,amount:quantity,date:dates,status:"payed",sold:"notsold"
})

console.log(newexpense ,"is")
newexpense.save()

        const newProduct = new Product({
            name:name,date:date,price:price,quantity:quantity,status:"payed"
        });
        newProduct.save((err)=>{
            if(err){
                console.log(err)
            }
        });

res.redirect("/product");

//        const newproduct={
//            name,
//            price,
//            date
//        }
//        const oldproduct = {...newproduct}
//        let arr=[];
//  arr.push(oldproduct)
//         Inventory.updateOne({name:name},{$set:{product:[ arr]}},(err)=>{
//             if(err){
//                 console.log(err)
//             } else {
//                 res.json({message:"product added"})

//             }
//         })






    } ,

    removeproduct:(req,res)=>{
        const {name,InventoryID} = req.body
        if(Array.isArray(name)){
          Product.delete({}).then((event)=>{console.log(event)})
        }
        console.log(req.body)
        console.log("item to remove name is"+name)
         Expense.updateOne({goodname:name},{$set:{sold:"sold"}}).then((result)=>{console.log(result)})
        Product.deleteOne({name:name},(err)=>{
            if(err){
                res.send(err)
            } else {
                 res.redirect("/product")
            }})
    } ,

    addseller:(req,res)=>{
        const {name,telephone,products} = req.body;
        const newSeller = new Seller({
            name:name,telephone:telephone,products:products
        });
        newSeller.save((err)=>{
            if(err){
                console.log(err)
            }else{
                res.redirect("/supplier")
            }
        })

    },

    removeseller:(req,res)=>{
        const {name} = req.body;

            Seller.deleteOne({name:name},(err)=>{
               if(err){
                   console.log(err)
               }else{

        res.redirect("/supplier")
               }
           })

    },
    adddeptor:(req,res)=>{
        const {name,datetaken,datetoclear,amounttaken} = req.body
        Deptor.findOne({name:name},(err,foundDeptor)=>{
            if(foundDeptor){
                Deptor.updateOne({name:name},{$set:{status:"dirty"}},(err)=>{
                    if(err){
                        console.log(err)
                    } else {
                         console.log("statusupdated")
                         res.redirect("/deptor")

                    }
                });
            }

        })
        const newdeptor = new Deptor({
            name,datetaken,datetoclear,amounttaken,status:"dirty"
        });

        newdeptor.save((err)=>{
            if(err){
                console.log(err)
            }
        })
        res.redirect("/deptor")

    },
    cleardept:(req,res)=>{
        const {name,amounttaken,datetoclear,status} = req.body
        Deptor.updateOne({name:name},{$set:{status:"clean"}},(err)=>{
            if(err){
                console.log(err)
            }
        });

        Deptor.deleteOne({status:"clean"}).then((err)=>{console.log(err)
 res.redirect("/deptor") }
      )


    } ,

    addcustomer:(req,res)=>{
      const {name,telephone,address} = req.body;
      const newCustomer = new Customer({
          name:name,telephone:telephone,address:address
      });
      newCustomer.save((err)=>{
          if(err){
              console.log(err)
          }
      })

      res.redirect("/customer")
    } ,
    removecustomer:(req,res)=>{
const {name} = req.body
      Customer.deleteOne({name}).then((result)=>{console.log(result)
res.redirect("/customer") }
    )
    } ,

    addincomming:(req,res)=>{
        const {goodname,amount,date,supplier,price} = req.body

        let dates = new Date().toLocaleDateString()
      console.log(dates)
        const newexpense = new Expense({
            goodname:goodname,price:price,amount:amount,date:dates,status:"pending",sold:"notsold"
        })

        console.log(newexpense ,"is")
        newexpense.save()



        Seller.findOne({name:supplier},(err,foundsupplier)=>{
            if(foundsupplier){

                Product.findOne({name:goodname},(err,foundproduct)=>{
                    if(!foundproduct) {
                        const newproduct= new Product({
                            name:goodname,quantity:amount,price:price,status:"pending"
                        })
                        newproduct.save()
                    }
                })



                const newIncomming = new Incomming({
                    goodname:goodname,amount:amount,date:dates,supplier:supplier,price:price
                })
                console.log("this is the incommin good",newIncomming);
                newIncomming.save((err)=>{
                    if(err){
                        console.log(err)
                    }
                    res.redirect("/Incomming")
                })
            } else {
                res.redirect("/supplier")
            }
        })

    } ,

    removeincomming:(req,res)=>{
        const {goodname} = req.body

     Product.updateOne({name:goodname},{$set:{status:"payed"}}).then((result)=>{console.log(result)})

     Expense.updateOne({goodname:goodname},{$set:{status:"payed"}}).then((result)=>{console.log(result)})


              Incomming.deleteOne({goodname:goodname}).then((result)=>{console.log(result)
        res.redirect("/Incomming") }
            )
            }



}
