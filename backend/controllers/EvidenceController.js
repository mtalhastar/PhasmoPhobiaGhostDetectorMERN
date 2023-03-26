const asyncHandler = require('express-async-handler');
const Evidence = require('../models/evidenceModel')
const mongoose=require('mongoose')

const getEvidences=asyncHandler(async(req, res) => {
    const evidence =await Evidence.find({}).sort({createdAt:-1})
    res.status(200).json(evidence)
})

const getAEvidence=asyncHandler(async(req, res) => {
   const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({message:`No such evidence `})
      }
     const evidence=await Evidence.findById({_id:id})
   if(!evidence){
   return res.status(404).json({error: 'No such a evidence'})
  }
  res.status(200).json(evidence)
})
const createEvidence=asyncHandler(async(req, res) => {
  const {Name,Image} = req.body
  try {
  const evidence= await Evidence.create({Name,Image})
  res.status(200).json(evidence)
  }catch(err) {
   res.status(400).json({error: err.message})
  }
})
const updateEvidence =asyncHandler(async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({message:`No such evidence `})
      }
    const updateEvidence =await Evidence.findByIdAndUpdate({_id:id},{...req.body})
    res.status(200).json(updateEvidence)
})

const deleteEvidence=asyncHandler(async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({message:`No such evidence `})
    }
    const deleted=await Evidence.findOneAndDelete({_id:id})
     if(!deleted){
     return res.status(404).json({error:'Nothing found'})
     }
    res.status(200).json(deleted)
})
module.exports = { getEvidences, getAEvidence, createEvidence, updateEvidence, deleteEvidence };