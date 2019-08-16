const express = require('express')
const router = express.Router();
const Item = require('../../models/Item')
const { check, validationResult } = require('express-validator/check');

// @route   POST api/items
// @desc    Get all items
// @access  Public

router.get('/', async (req, res) => {
    try {
      const items = await Item.find().sort({ date: -1 });
      res.json(items);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});


// @route    GET api/items/:id
// @desc     Get post by ID
// @access   Private
router.get('/:id',     [
    check('text', 'Text is required')
      .not()
      .isEmpty()
  ], async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
  
      if (!item) {
        return res.status(404).json({ msg: 'Post not found' });
      }
  
      res.json(item);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Post not found' });
      }
      res.status(500).send('Server Error');
    }
});



// @route    POST api/items/
// @desc     POST item
// @access   Public
router.post('/', 
[
    check('text', 'Text is required')
      .not()
      .isEmpty()
  ],
  
  async (req, res) => {
   
    const newItem = new Item({
        item: req.body.item
    })
    const item = await newItem.save()
    res.json(item);
});





module.exports = router;