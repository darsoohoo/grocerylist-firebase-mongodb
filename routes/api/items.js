const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');

router.get('/', async (req, res) => {
  try {
    const items = await Item.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/', (req, res) => {
  const newItem = new Item({
    item: req.body.itemInput,
    purchased: req.body.purchased
  });
  newItem.save().then(item => res.json(item));
});

router.delete('/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      item.item = req.body.newItem;
      item.purchased = req.body.purchased;
      item
        .save()
        .then(() => res.json('Item updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
