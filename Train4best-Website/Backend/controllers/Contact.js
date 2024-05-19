import Contact from "../models/ContactModel.js";

export const getContact = async (req, res) => {
  try {
    const users = await Contact.findAll({
      attributes: ["id", "name", "email", "phone", "subject", "message"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const Contacts = async (req, res) => {
  console.log("Request body:", req.body); // Log request body
  const { name, email, phone, subject, message } = req.body;
  try {
    await Contact.create({
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    });
    res.json({ msg: "Register berhasil" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
