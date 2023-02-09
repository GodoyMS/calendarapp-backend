const router = require('express').Router();

//Import Schema events from models
const eventsModel=require('../models/eventsModel');

//Create a post route
router.post('/api/event',async (req,res)=>{
    try{
        const newEvent= new eventsModel({
            title:req.body.title,
            startDate:req.body.startDate,
            finishDate:req.body.finishDate,
            createdAt:req.body.createdAt,
        })
        const saveEvent=await newEvent.save();
        res.status(200).json(saveEvent);

    }catch(err){
        res.json(err);  
    }
})

//Create get Route

router.get('/api/events',async(req,res)=>{
    try {
        const allEvents=await eventsModel.find({});
        res.status(200).json(allEvents)

        
    } catch (error) {
        res.json(err)
        
    }
})

//Create delete Route
router.delete('/api/event/:id',async(req,res)=>{
    try {
        const deletedItem=await eventsModel.findByIdAndDelete(req.params.id)
        res.json('Item deletd')
    } catch (error) {
        res.status(500).json({
            message:'Error deleting event item',
            error:error.message
        })
        
    }
})
module.exports=router;