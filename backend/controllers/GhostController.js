const asyncHandler = require('express-async-handler');
const Ghost = require('../models/ghostModel')
const mongoose=require('mongoose')

const getGhosts=asyncHandler(async(req, res) => {
    const ghost =await Ghost.find({}).sort({createdAt:-1})
    res.status(200).json(ghost)
})

const getAGhost=asyncHandler(async(req, res) => {
   const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({message:`No such Ghost `})
      }
     const ghost=await Ghost.findById({_id:id})
   if(!ghost){
   return res.status(404).json({error: 'No such a Ghost'})
  }
  res.status(200).json(ghost)
})
const createGhost = asyncHandler(async (req, res) => {
  const { Name ,Image,EvidenceList=[]} = req.body;
  // initialize an empty array to store the evidences
  try {
    // create a new Ghost object with Name, Image, and evidences properties
    const ghost = await Ghost.create({ Name, Image, EvidenceList });
    res.status(200).json(ghost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const addEvidenceToGhost = asyncHandler(async (req, res) => {
  const {ghostId} = req.params;

  if (!mongoose.Types.ObjectId.isValid(ghostId)) {
    return res.status(400).json({ message: 'Invalid Ghost ID' });
  }
  try {
    const ghost = await Ghost.findById(ghostId);
    if (!ghost) {
      return res.status(404).json({ message: 'Ghost not found' });
    }
    const {evidence} = req.body

    if (!evidence) {
      return res.status(404).json({ message: 'Evidence not found' });
    }
    ghost.EvidenceList.push(evidence)
    await ghost.save();

    res.status(200).json(ghost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


const updateGhost =asyncHandler(async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({message:`No such Ghost`})
      }
    const ghost =await Ghost.findByIdAndUpdate({_id:id},{...req.body})
    res.status(200).json(ghost)
})

const deleteGhost=asyncHandler(async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({message:`No such Ghost `})
    }
    const deleted=await Ghost.findOneAndDelete({_id:id})
     if(!deleted){
     return res.status(404).json({error:'Nothing found'})
     }
    res.status(200).json(deleted)
})
module.exports = { getGhosts, getAGhost, createGhost, updateGhost, deleteGhost,addEvidenceToGhost};