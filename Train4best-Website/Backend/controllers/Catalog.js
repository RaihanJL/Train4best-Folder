import Catalog from "../models/CatalogModel.js";

export const getBarang = async (req, res) => {
  try {
    const items = await Catalog.findAll({
      attributes: [
        "id",
        "img_barang",
        "nama_barang",
        "kategori_barang",
        "desc_barang",
        "tahun_terbit",
        "harga_barang",
      ],
    });

    const itemsWithBase64Image = items.map((item) => ({
      ...item.toJSON(),
      img_barang: item.img_barang.toString("base64"),
    }));

    res.json(itemsWithBase64Image);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const getProductDetails = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Catalog.findOne({
      where: { id: productId },
      attributes: [
        "img_barang",
        "nama_barang",
        "kategori_barang",
        "desc_barang",
        "tahun_terbit",
        "harga_barang",
      ],
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const productWithBase64Image = {
      ...product.toJSON(),
      img_barang: product.img_barang.toString("base64"),
    };

    res.json(productWithBase64Image);
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
