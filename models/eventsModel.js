const mongoose=require('mongoose');

//NEW SCHEMA

const EventsModelSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },

    startDate:{
        type:Date,
    },
    finishDate:{
        type:Date,
    },
    createdAt:{
        type:Date,
    }
})
module.exports=mongoose.model('events',EventsModelSchema);
