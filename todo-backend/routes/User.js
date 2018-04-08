const mongoose = require("mongoose");
const User = mongoose.model("User");
const md5 = require("md5");
module.exports = app => {
  app.post("/api/user/signup", async (req, res) => {
    const { emailId, password, userName } = req.body;
    const md5Password = md5(password);
    const user = new User({
      emailId,
      password: md5Password,
      userName
    });

    try {
      await userResult= user.save();
      console.log('userResult',userResult);
      const result = {
        _id: userResult._id,
        userName: userName
      };
      res.status(200).json(result);
    } catch (err) {
      res.status(401).json(err);
    }
  });

  app.post("/api/user/login", async (req, res) => {
    const { emailId, password } = req.body;
    try {
      const existingUser = await User.findOne({
        $and: [
          {
            emailId: emailId
          },
          {
            password: md5(password)
          }
        ]
      });
      if (existingUser) {
        const result = {
          _id: existingUser._id,
          userName: existingUser.userName
        };
        console.log("result", result);
        res.status(200).json(result);
      } else {
        res.status(404).json("Email is not exist");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
};
