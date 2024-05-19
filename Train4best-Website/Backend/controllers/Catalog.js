import Catalog from "../models/CatalogModel.js";

export const getBarang = async (req, res) => {
  try {
    const items = await Catalog.findAll({
      attributes: [
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
