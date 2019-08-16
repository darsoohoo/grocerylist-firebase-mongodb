const express = require('express')
const router = express.Router();
const Item = require('../../models/Item')


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
    })

    newItem.save().then(item => res.json(quote));
});





module.exports = router;