import Payment from "../models/PaymentModel.js";
import Catalog from "../models/CatalogModel.js";

// Controller to get payment details by ID
export const getPaymentDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const payment = await Payment.findByPk(id);
    if (!payment) {
      return res.status(404).json({ msg: "Payment not found" });
    }
    res.json(payment);
  } catch (error) {
    console.error("Error fetching payment details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getPayment = async (req, res) => {
  try {
    const payments = await Payment.findAll({
      attributes: [
        "id",
        "name",
        "email",
        "price",
        "paymentCode",
        "transactionDate",
        "paymentMethod",
        "receipt",
      ],
    });
    res.json(payments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const PaymentCatalog = async (req, res) => {
  const {
    catalogId,
    name,
    email,
    paymentCode,
    paymentMethod,
    transactionDate,
  } = req.body;
  const receipt = req.file;

  if (
    !name ||
    !email ||
    !paymentCode ||
    !paymentMethod ||
    !transactionDate ||
    !receipt ||
    !catalogId
  ) {
    return res.status(400).json({ msg: "Please fill in all fields" });
  }

  try {
    const catalog = await Catalog.findOne({ where: { id: catalogId } });
    if (!catalog) {
      return res.status(404).json({ msg: "Catalog item not found" });
    }

    const receiptPath = receipt.path; // Path to the uploaded receipt
    await Payment.create({
      name,
      email,
      paymentCode,
      price: catalog.harga_barang,
      paymentMethod,
      transactionDate,
      receipt: receiptPath,
    });

    res.json({ msg: "Payment registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to register payment" });
  }
};
