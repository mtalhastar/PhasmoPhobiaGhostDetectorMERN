const asyncHandler = require('express-async-handler');
const Game = require('../models/gameModel')
const mongoose=require('mongoose')

const getGame=asyncHandler(async(req, res) => {
    const game =await Game.find({}).sort({createdAt:-1})
    res.status(200).json(game)
})

const getAGame=asyncHandler(async(req, res) => {
   const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({message:`No such Game `})
      }
     const game=await Game.findById({_id:id})
   if(!game){
   return res.status(404).json({error: 'No such Game'})
  }
  res.status(200).json(game)
})
const createGame = asyncHandler(async (req, res) => {
  const { Name } = req.body;
  // initialize an empty array to store the evidences
  try {
    // create a new Ghost object with Name, Image, and evidences properties
    const game = await Game.create({Name});
    res.status(200).json(game);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const updateGame =asyncHandler(async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({message:`No such Game`})
      }
    const ghost =await Game.findByIdAndUpdate({_id:id},{...req.body})
    res.status(200).json(ghost)
})

const deleteGame=asyncHandler(async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({message:`No such Game `})
    }
    const deleted=await Game.findOneAndDelete({_id:id})
     if(!deleted){
     return res.status(404).json({error:'Nothing found'})
     }
    res.status(200).json(deleted)
})
module.exports = { getGame, getAGame, createGame, updateGame, deleteGame};