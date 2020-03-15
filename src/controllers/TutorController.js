const Tutor = require('../models/Tutor');
const parseStringAsArray = require('../utils/parseStringAsArray');
const parseCoordinatesAsLocation = require('../utils/parseCoordinatesAsLocation');

module.exports = {
  async index(req, res) {
    const tutors = await Tutor.find();

    return res.json(tutors);
  },

  async store(req, res) {
    const {
      name,
      bio,
      avatarUrl,
      subjects,
      latitude,
      longitude,
      email,
    } = req.body;

    let tutor = await Tutor.findOne({ email });

    if (!tutor) {
      const subjectsArray = parseStringAsArray(subjects);

      const location = parseCoordinatesAsLocation(longitude, latitude);

      tutor = await Tutor.create({
        name,
        bio,
        avatarUrl,
        subjects: subjectsArray,
        location,
        email,
      });
    } else {
      return res.send({
        message: 'Tutor already exists!',
      });
    }

    return res.json(tutor);
  },

  async update(req, res) {
    const {
      name,
      bio,
      avatarUrl,
      subjects,
      latitude,
      longitude,
      email,
    } = req.body;

    const editedTutor = await Tutor.findById(req.params.id);

    if (subjects) {
      const subjectsArray = parseStringAsArray(subjects);
      editedTutor.subjects = subjectsArray;
    }

    if (latitude && longitude) {
      const location = parseCoordinatesAsLocation(longitude, latitude);
      editedTutor.location = location;
    }

    editedTutor.name = name || editedTutor.name;
    editedTutor.avatarUrl = avatarUrl || editedTutor.avatarUrl;
    editedTutor.bio = bio || editedTutor.bio;
    editedTutor.email = email || editedTutor.email;

    const result = await editedTutor.save();

    return res.json(result);
  },

  async destroy(req, res) {
    const deletedTutor = await Tutor.findByIdAndDelete(req.params.id);

    return res.json({ message: `Tutor deleted: ${deletedTutor.name}` });
  },
};
