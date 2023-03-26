const mongoose =require('mongoose')
const ghost =require('../models/ghostModel')
//require('dotenv').config()
const connectToDatabase=async()=> {
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database Connected`)
    }catch(e){
        console.log(e)
    }
}
module.exports=connectToDatabase