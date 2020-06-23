const express = require("express");
const inventoryRoutes = express.Router();
const multer = require("multer");
let Inventory = require("../models/Inventory");
const inventoryHelper = require("./inventoryHelper");
const userImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

inventoryRoutes.post(
  "/add",
  multer({ storage: userImageStorage }).single("image"),
  inventoryHelper.addInventry
);


inventoryRoutes.route("/").get(function (req, res) {
  Inventory.find(function (err, inventory) {
    if (err) {
      console.log(err);
    } else {
      res.json(inventory);
    }
  });
});

inventoryRoutes.route("/edit/:id").get(function (req, res) {
  let id = req.params.id;
  Inventory.findById(id, function (err, inventory) {
    res.json(inventory);
  });
});

inventoryRoutes.route("/update/:id").post(function (req, res) {
  Inventory.findById(req.params.id, function (err, inventory) {
    if (!inventory) res.status(404).send("data is not found");
    else {
      inventory.item_name = req.body.item_name;
      inventory.price = req.body.price;
      inventory.quantity = req.body.quantity;
      inventory.discription = req.body.discription;

      inventory
        .save()
        .then((inventory) => {
          res.json("Update Complete");
        })

        .catch((err) => {
          res.status(400).send("unable to upload database");
        });
    }
  });
});

inventoryRoutes.route("/delete/:id").get(function (req, res) {
  Inventory.findByIdAndRemove({ _id: req.params.id }, function (
    err,
    inventory
  ) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

inventoryRoutes.route("/itemcard/:id").get(function (req, res) {
  let id = req.params.id;
  Inventory.findById(id, function (err, inventory) {
    res.json(inventory);
  });
});

module.exports = inventoryRoutes;
