const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Inventory = new Schema(
  {
    item_name: {
      type: String,
    },
    price: {
      type: String,
    },
    quantity: {
      type: String,
    },
    discription: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    collection: "inventory",
  }
);

module.exports = mongoose.model("Inventory", Inventory);
