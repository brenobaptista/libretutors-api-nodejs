const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const TutorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  avatarUrl: {
    type: String,
    required: true,
  },
  subjects: {
    type: [String],
    required: true,
  },
  location: {
    type: PointSchema,
    index: '2dsphere',
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Tutor', TutorSchema);
