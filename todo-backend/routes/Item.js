const mongoose = require("mongoose");

const Item = mongoose.model("Item");
const cleanCache = require("../middlewares/cleanCache");
module.exports = app => {
  app.get("/api/items", async (req, res) => {
    const items = await Item.find({ _user: req.user.id })
      .sort("-isActive")
      .cache({
        key: req.user.id
      });
    res.status(200).json(items);
  });
  app.get("/api/items/inactive", async (req, res) => {
    const items = await Item.find({
      $and: [{ _user: req.user.id }, { isActive: false }]
    }).cache({
      key: req.user.id
    });
    res.status(200).json(items);
  });
  app.get("/api/items/active", async (req, res) => {
    const items = await Item.find({
      $and: [{ _user: req.user.id }, { isActive: true }]
    }).cache({
      key: req.user.id
    });
    res.status(200).json(items);
  });

  app.post("/api/item", cleanCache, async (req, res) => {
    const { title, _user } = req.body;
    const item = new Item({
      title,
      _user
    });

    try {
      await item.save();
      res.status(200).json(item);
    } catch (err) {
      res.status(401).json("Invalid User Id");
    }
  });
};
