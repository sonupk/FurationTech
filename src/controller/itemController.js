const itemModel=require("../models/itemModel")
const validation = require("../validation/validator")

const createitem = async function (req, res){
    try {
        const data=req.body
        const{name,description,dateofMfg}=data
        if (Object.keys(data).length == 0) {
            return res.status(404).send({ status: false, message: "data must be in body" })
        }

       if (!name) {
            return res.status(404).send({ status: false, message: "name must be in body" })
        }

        if (!validation.isValidName(name)) {
            return res.status(400).send({ status: false, message: "name is only  take alphabates" });
          }

        if (!description) {
            return res.status(404).send({ status: false, message: "description must be in body" })
        }

        if (!validation.isValidDescription(description)) {
            return res.status(400).send({ status: false, message: "description is only  take alphabates" });
          }

          if (!dateofMfg) {
            return res.status(404).send({ status: false, message: "dateofMfg must be in body" })

        }

        if (!validation.isValiddateofMfg(dateofMfg)) {
            return res.status(400).send({ status: false, message: `dateofMfg must be numerical value` });
          }
        
//------------------------creating a data of item---------------------------
        const createitem = await itemModel.create(data);
        res.status(201).send({ status: true, message: createitem })

        } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}


//----------------------fetching data of all items------------------------------------
const getallitems=async function (req,res){
    try {
        const items=await itemModel.find()
        res.status(200).send({ status: true, data: items })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}
//---------------------------fetching data of item Id-----------------------------------
const getitembyId = async function (req, res) {
    try {
        const itemId = req.params.itemId
        
        // ------------------------------Find item ------------------------------  
        const finditem = await itemModel.findOne({ _id: itemId })
        if (!finditem) return res.status(404).send({ status: false, message: "No item found." })

        } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
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


//------------------------------data deletion of items-------------------------------------
const deleteitem=async function(req,res){
    try {
        let itemid=req.params.itemid
        let body=req.body
        const deleteitem=await itemModel.updateOne({_id:itemid},body,)
        return res.status(200).send({ status: true, message: " item delete successfully ", data: deleteitem });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports={createitem,getallitems,getitembyId,updateitem,deleteitem}