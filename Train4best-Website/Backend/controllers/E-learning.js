import Courses from "../models/E-learning.js";

export const getElearning = async (req, res) => {
  try {
    const courses = await Courses.findAll({
      attributes: ["id", "img_skema", "nama_skema"],
    });

    const coursesWithBase64Image = courses.map((course) => ({
      ...course.toJSON(),
      img_skema: course.img_skema ? course.img_skema.toString("base64") : null,
    }));

    res.json(coursesWithBase64Image);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
