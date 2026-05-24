const express = require('express');
const router = express.Router();
const calcController =
    require('../controllers/calculadoraController');

router.post('/somar', calcController.somar);
router.post('/subtrair', calcController.subtrair);
router.post('/multiplicar', calcController.multiplicar);
router.post('/dividir', calcController.dividir);

module.exports = router;