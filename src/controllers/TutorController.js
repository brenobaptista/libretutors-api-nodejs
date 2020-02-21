const Tutor = require("../models/Tutor");
const parseStringAsArray = require("../utils/parseStringAsArray");
const parseCoordinatesAsLocation = require("../utils/parseCoordinatesAsLocation");

module.exports = {
  async index(req, res) {
    const tutors = await Tutor.find();

    return res.json(tutors);
  },

  async store(req, res) {
    const {
      name,
      bio,
      avatar_url,
      subjects,
      latitude,
      longitude,
      email
    } = req.body;

    let tutor = await Tutor.findOne({ email });

    if (!tutor) {
      const subjectsArray = parseStringAsArray(subjects);

      const location = parseCoordinatesAsLocation(longitude, latitude);

      tutor = await Tutor.create({
        name,
        bio,
        avatar_url,
        subjects: subjectsArray,
        location,
        email
      });
    } else {
      return res.send({
        message: "User already exists!"
      });
    }

    return res.json(tutor);
  },

  async update(req, res) {
    const {
      name,
      bio,
      avatar_url,
      subjects,
      latitude,
      longitude,
      email
    } = req.body;

    let editedTutor = await Tutor.findById(req.params.id);

    if (subjects) {
      const subjectsArray = parseStringAsArray(subjects);
      editedTutor.subjects = subjectsArray;
    } else {
      editedTutor.subjects = editedTutor.subjects;
    }

    if (latitude && longitude) {
      const location = parseCoordinatesAsLocation(longitude, latitude);
      editedTutor.location = location;
    } else {
      editedTutor.location = editedTutor.location;
    }

    editedTutor.name = name || editedTutor.name;
    editedTutor.avatar_url = avatar_url || editedTutor.avatar_url;
    editedTutor.bio = bio || editedTutor.bio;
    editedTutor.email = email || editedTutor.email;

    const result = await editedTutor.save();

    return res.json(result);
  },

  async destroy(req, res) {
    const deletedTutor = await Tutor.findByIdAndDelete(req.params.id);

    return res.json({ message: `Tutor deleted: ${deletedTutor.name}` });
  }
};
