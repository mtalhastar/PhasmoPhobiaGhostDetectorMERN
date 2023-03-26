const mongoose =require('mongoose')
                     
const Schema = mongoose.Schema
const gameSchema=new Schema({
        Name: {
            type: String,
            required: true,
            unique:true
        }
    },{timestamps:true});

module.exports=mongoose.model('Game',gameSchema)