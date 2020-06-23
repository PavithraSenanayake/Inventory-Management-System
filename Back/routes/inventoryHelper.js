let Inventory = require("../models/Inventory");

exports.addInventry = async (req, res, next) => {
  try {
    const file = req.file;

    let inventory = new Inventory({
      item_name: req.body.item_name,
      price: req.body.price,
      quantity: req.body.quantity,
      discription: req.body.discription,
      image: "./images/" + file.filename,
    });
    inventory
      .save()
      .then((inventory) => {
        res.status(200).json({ inventory: "inventory added successfully" });
      })
      .catch((err) => {
        res.status(400).send("Unable to save");
      });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
