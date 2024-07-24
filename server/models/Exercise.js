const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: String,
  sets: [
    {
      reps: Number,
      weight: String,
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model('Exercise', exerciseSchema);
