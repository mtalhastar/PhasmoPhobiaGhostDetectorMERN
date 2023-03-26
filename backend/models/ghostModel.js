const mongoose =require('mongoose')
                     
const Schema = mongoose.Schema
const ghostSchema=new Schema({
        Name: {
            type: String,
            required: true,
            unique:true
        },
        Image: {
            type:String
        },
        EvidenceList:{
            type:[String],
            required:true
        }
    },{timestamps:true});

module.exports=mongoose.model('Ghost',ghostSchema)