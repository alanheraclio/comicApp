const express = require('express');
const router = express();
const heroesCtrl = require('../controllers/heroes.controllers');

router.get('/', heroesCtrl.getHeroes);

router.post('/', heroesCtrl.postHeroes);

router.get('/:id', heroesCtrl.getHeroe);

module.exports = router;