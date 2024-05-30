import CatalogPay from "../models/PaymentCatalog.js";

export const getPaymentCat = async (req, res) => {
  try {
    const catalog = await CatalogPay.findAll({
      attributes: [
        "id",
        "email_user",
        "id_barang",
        "payment_method",
        "receipt_payment",
        "createdAt",
      ],
    });
    res.json(catalog);
  } catch (error) {
    console.log(error);
  }
};
