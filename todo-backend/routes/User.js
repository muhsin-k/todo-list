const mongoose = require("mongoose");
const passport = require("passport");
const User = mongoose.model("User");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/home");
    }
  );

  app.post("/api/user", async (req, res) => {
    const { googleId } = req.body;
    const user = new User({
      googleId
    });

    try {
      await user.save();
      res.status(200).send(user);
    } catch (err) {
      res.status(401).send(err);
    }
  });
};
