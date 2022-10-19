const mongoose = require('mongoose');

const faceSnapsSchema = mongoose.Schema({

  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  createdDate: { type: Date, required: true },
  snaps: { type: Number, required: true },
  location: { type: String, required: true },

});
module.exports = mongoose.model('facesnaps', faceSnapsSchema);
