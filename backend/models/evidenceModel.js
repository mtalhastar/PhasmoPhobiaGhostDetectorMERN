const mongoose =require('mongoose')

const Schema = mongoose.Schema
const evidenceSchema=new Schema({
        Name: {
            type: String,
            required: true,
            unique:true
        },
        Image: {
            type:String
        },
    },{timestamps:true});

module.exports=mongoose.model('Evidence',evidenceSchema)