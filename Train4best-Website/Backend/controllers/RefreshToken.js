import Users from "../models/UserModel.js";
import Catalog from "../models/CatalogModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const user = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!user[0]) return res.sendStatus(403);

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) return res.sendStatus(403);

        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign(
          { userId, name, email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "14d",
          }
        );

        try {
          const items = await Catalog.findAll({
            attributes: [
              "nama_barang",
              "kategori_barang",
              "desc_barang",
              "tahun_terbit",
              "harga_barang",
              "img_barang",
            ],
          });

          res.json({ accessToken, items });
        } catch (catalogError) {
          console.log(catalogError);
          res.sendStatus(500);
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
