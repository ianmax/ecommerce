const router = require('express').Router();
const Items = require('../controllers/itemsController');

router.get('/', Items.findAll);
router.post('/', Items.create);
router.put('/:id', Items.update);
router.delete('/:id', Items.remove);

module.exports = router;
