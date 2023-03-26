
const express = require('express');
const router = express.Router();
const {getGame,getAGame, createGame, updateGame, deleteGame} =require('../controllers/gameController')
router.route('/').get(getGame).post(createGame)
router.route('/:id').put(updateGame).delete(deleteGame)
router.route('/:id').get(getAGame)
module.exports = router;
