const itemController=require("../controller/itemController")

const express=require("express");


router.post('/createitem',itemController.createitem)
router.get('/getallitems',itemController.getallitems)
router.put('/updateitem/:itemid',itemController.updateitem)
router.delete('/deleteitem/:itemid',itemController.deleteitem)





module.exports=router