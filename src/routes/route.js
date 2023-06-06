const express=require("express")
const router=express.Router();

const { createitem, getallitems, getitembyId,updateitem, deleteitem } = require("../controller/itemController")

router.post( '/api/items',createitem ); //Create a new item in the database

router.get ('/api/items',getallitems);//Retrieve all items from the database

router.get ('api/items/:id',getitembyId)//Retrieve a specific item by its ID

router.put('/api/items/:id',updateitem);//Update an existing item by its ID

router.delete('/api/items/:id',deleteitem);// Delete an item by its ID


module.exports=router;