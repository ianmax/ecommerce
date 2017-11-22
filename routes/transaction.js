const router = require('express').Router();
const transaction = require('../controllers/transactionController');

router.get('/all', transaction.getall);
router.get('/:id', transaction.getone);
router.post('/buy', transaction.buy);

module.exports = router;
