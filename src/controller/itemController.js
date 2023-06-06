const itemModel=require("../models/itemModel")

// app.post('/api/items', async (req, res) => {
//     try {
//       const { error } = validateItem(req.body);
//       if (error) return res.status(400).send(error.details[0].message);
  
//       const item = new Item({
//         name: req.body.name,
//         description: req.body.description,
//       });
  
//       await item.save();
//       res.send(item);
//     } catch (error) {
//       logger.error('Failed to create item in the database', error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
const createitem = async function (req, res){
    try {
        const data=req.body
        const{name,description}=data
        if (Object.keys(data).length == 0) {
            return res.status(404).send({ status: false, message: "data must be in body" })
        }
        if (!name) {
            return res.status(404).send({ status: false, message: "name must be in body" })
        }
        if (!description) {
            return res.status(404).send({ status: false, message: "description must be in body" })
        }
        



        //------------------------creating a data of item---------------------------
        const createitem = await itemModel.create(data);
        res.status(201).send({ status: true, message: createitem })

        } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}


//----------------------fetching data items------------------------------------
const getallitems=async function (req,res){
    try {
        const items=await itemModel.find()
        res.status(200).send({ status: true, data: items })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

// ---------------------- data Updation of items--------------------------------
const updateitem=async function(req,res){
    try{
        let itemid=req.params.itemid
        let body=req.body
        
        const updateDetails = await itemModel.findOneAndUpdate({_id:itemid}, body, { new: true })
     return res.status(200).send({ status: true, message: " item update successfully ", data: updateDetails });
}catch(error){
    res.status(500).send({ status: false, message: error.message })
}
}
//------------------------------for items deletion-------------------------------------
const deleteitem=async function(req,res){
    try {
        let itemid=req.params.itemid
        let body=req.body
        const deleteitem=await itemModel.updateOne({_id:itemid},body,{isDeleted:true})
        return res.status(200).send({ status: true, message: " item delete successfully ", data: deleteitem });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports={createitem,getallitems,updateitem,deleteitem}