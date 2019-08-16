const mongoose = require('mongoose');


const ItemSchema = new mongoose.Schema({
  item: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
