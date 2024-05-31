import Courses from "../models/e-learning.js";
import fs from 'fs';

export const getElearning = async (req, res) => {
  try {
    const courses = await Courses.findAll({
      attributes: ["id", "img_skema", "nama_skema"],
    });

    // Convert BLOB to base64 string
    const updatedCourses = courses.map(course => ({
      ...course.dataValues,
      img_skema: course.img_skema ? `data:image/jpeg;base64,${course.img_skema.toString('base64')}` : null
    }));

    res.json(updatedCourses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving courses" });
  }
};

export const createElearning = async (req, res) => {
  const { nama_skema } = req.body;
  try {
    const newCourse = await Courses.create({
      img_skema: req.file ? fs.readFileSync(req.file.path) : null,
      nama_skema,
    });
    if (req.file) fs.unlinkSync(req.file.path);
    res.status(201).json({
      ...newCourse.dataValues,
      img_skema: newCourse.img_skema ? `data:image/jpeg;base64,${newCourse.img_skema.toString('base64')}` : null
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating course" });
  }
};

export const updateElearning = async (req, res) => {
  const { id } = req.params;
  const { nama_skema } = req.body;
  try {
    const updatedFields = { nama_skema };
    if (req.file) {
      updatedFields.img_skema = fs.readFileSync(req.file.path);
      fs.unlinkSync(req.file.path);
    }
    await Courses.update(updatedFields, { where: { id } });
    const updatedCourse = await Courses.findByPk(id);
    res.status(200).json({
      ...updatedCourse.dataValues,
      img_skema: updatedCourse.img_skema ? `data:image/jpeg;base64,${updatedCourse.img_skema.toString('base64')}` : null
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating course" });
  }
};

export const deleteElearning = async (req, res) => {
  const { id } = req.params;
  try {
    await Courses.destroy({ where: { id } });
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting course" });
  }
};
