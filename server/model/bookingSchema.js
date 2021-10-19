const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema({
  user:{
    type: String,
    required : true
  },
  pickupcity:{
    type: String,
    required : true
  },
  dropcity:{
    type: String,
    required : true
  },
  date:{
    type: Date,
    required : true
  },
  weight:{
      type: Number,
      required: true
  },
  transemail:{
    type: String,
    required: true
  }
})


const Booking = mongoose.model('BOOK',bookingSchema);
module.exports = Booking;