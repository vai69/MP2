const mongoose = require("mongoose");


const bookingReuestSchema = new mongoose.Schema({
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
  },
  trucknumber:{
    type: String,
    required : true
  }
})


const Booking = mongoose.model('BookingRequest',bookingRequestSchema);
module.exports = Booking;