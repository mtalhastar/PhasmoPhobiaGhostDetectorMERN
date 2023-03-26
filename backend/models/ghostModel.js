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
        EvidenceList:[{
            Game:{type:String,required:true},
            evidences:[String],
        }
        ]
    },{timestamps:true});

module.exports=mongoose.model('Ghost',ghostSchema)