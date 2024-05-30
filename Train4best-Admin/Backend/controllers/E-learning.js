import Courses from "../models/e-learning.js";

export const getElearning = async (req, res) => {
  try {
    const course = await Courses.findAll({
      attributes: ["id", "img_skema", "nama_skema"],
    });
    res.json(course);
  } catch (error) {
    console.log(error);
  }
};
