const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({
  queuePosition: {
    type: Number
  },
  firstName: {
    type: String,
    required: 'Please enter your first name',
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: 'Please enter your phone number',
    trim: true,
    unique: true
  },
  partySize: {
    type: Number,
    required: 'Please enter your party size',
    trim: true
  },
  moveUp: { type: Boolean, default: false },
  moveDown: { type: Boolean, default: false },
  seated: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
  email: {
    type: String,
    match: [/.+\@.+\..+/, 'Please enter a valid e-mail address']
  },
  notes: { type: String, maxlength: 280 }
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
