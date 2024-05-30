import CoursesPay from "../models/PaymentCourses.js";

export const getPaymentCour = async (req, res) => {
  try {
    const course = await CoursesPay.findAll({
      attributes: [
        "id",
        "email_user",
        "id_barang", // Ensure this matches your model
        "payment_method",
        "receipt_payment",
        "createdAt",
      ],
    });
    res.json(course);
  } catch (error) {
    console.error("Error fetching payment courses:", error);
    res.status(500).json({ error: "Server error" });
  }
};
