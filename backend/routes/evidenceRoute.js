
const express = require('express');
const router = express.Router();
const {getEvidences, getAEvidence, createEvidence, updateEvidence, deleteEvidence} =require('../controllers/EvidenceController')
router.route('/').get(getEvidences).post(createEvidence)
router.route('/:id').put(updateEvidence).delete(deleteEvidence)
router.route('/:id').get(getAEvidence)
module.exports = router;
