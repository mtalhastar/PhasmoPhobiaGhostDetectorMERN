
const express = require('express');
const router = express.Router();
const {getGhosts, getAGhost, createGhost, updateGhost, deleteGhost,addEvidenceToGhost} =require('../controllers/GhostController')
router.route('/').get(getGhosts).post(createGhost)
router.route('/:id').put(updateGhost).delete(deleteGhost)
router.route('/:id').get(getAGhost).post(addEvidenceToGhost)
module.exports = router;
