const mongoose = require("mongoose");

const Item = mongoose.model("Item");
const cleanCache = require("../middlewares/cleanCache");
module.exports = app => {
  app.get("/api/items", async (req, res) => {
    try {
      const items = await Item.find({ _user: req.user.id })
        .sort("-isActive")
        .cache({
          key: req.user.id
        });
      res.status(200).json(items);
    } catch (err) {
      res.status(404).json(err);
    }
  });
  app.put("/api/item", cleanCache, async (req, res) => {
    const { _id, isActive } = req.body;
    const item = await Item.findOne({ _id: _id });
    console.log("item", item);
    if (item) {
      try {
        item.isActive = isActive;
        await item.save();
        res.status(200).json(item);
      } catch (err) {
        res.status(401).json(err);
      }
    } else {
      res.status(404).json("Invalid item Id");
    }
  });
  app.post("/api/deleteitem", cleanCache, async (req, res) => {
    const { _id } = req.body;
    try {
      const item = await Item.remove({ _id: _id });
      res.status(200).json(item);
    } catch (err) {
      res.status(401).json(err);
    }
  });

  app.post("/api/item", cleanCache, async (req, res) => {
    const { title } = req.body;
    const _user = req.user.id;
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
  app.get("/api/working", async (req, res) => {
    res.status(200).json("It is working");
  });
};
