const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      phone:{
        type:Number,
        required:true
      }
      ,
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('booking', BookingSchema);