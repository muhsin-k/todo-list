const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("User");

passport.serializeUser((user, done) => {
  console.log("Serialize User", user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/callback",
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let emailId = null,
          profilePic = null;
        if (profile.emails) {
          emailId = profile.emails[0].value;
        }
        if (profile.photos) {
          profilePic = profile.photos[0].value;
        }
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        const user = await new User({
          googleId: profile.id,
          displayName: profile.displayName,
          emailId: emailId,
          profilePic: profilePic
        }).save();
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);
