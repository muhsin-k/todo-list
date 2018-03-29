const mongoose = require("mongoose");
const passport = require("passport");
const User = mongoose.model("User");

module.exports = app => {
  app.get(
    "/api/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/api/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("http://localhost:3000/home");
    }
  );

  app.get("/api/user", async (req, res) => {
    res.status(200).send(req.user);
  });
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
