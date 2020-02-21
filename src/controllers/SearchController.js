const Tutor = require("../models/Tutor");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    const { latitude, longitude, subjects } = req.query;

    const subjectsArray = parseStringAsArray(subjects);

    const tutors = await Tutor.find({
      subjects: {
        $in: subjectsArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return res.json({ tutors });
  }
};
