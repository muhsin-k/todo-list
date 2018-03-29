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
      setTimeout(function() {
        res.redirect("http://localhost:3000/home");
      }, 2000);
    }
  );
  // app.get("/auth/google/callback", passport.authenticate("google"), function(
  //   req,
  //   res
  // ) {
  //   // Explicitly save the session before redirecting!
  //   console.log("req.session", req.session);
  //   req.session.save(() => {
  //     console.log("Save session");
  //     res.redirect("http://localhost:3000/home");
  //   });
  // });

  app.get("/api/user", async (req, res) => {
    res.status(200).send(req.user);
  });
  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
