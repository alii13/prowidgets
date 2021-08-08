const User = require("../../model/User");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var CustomError = require("../../error/customError");
const { validationResult } = require("express-validator");
require("dotenv").config();

exports.userSignUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let error = new CustomError("Validation failed!", 422);
    res.status(422).send(error);
  }

  const { name, email, phoneNumber, password } = req.body;

  try {
    let user = await User.findOne({
      email,
    });
    if (user) {
      let error = new CustomError("User Already Exist!", 403);
      return res.status(403).send(error);
    }

    user = new User({
      name,
      email,
      phone_number: phoneNumber,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    try {
      const userData = await user.save();
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.TOKEN_EXPIRATION_TIME,
        },
        (err, token) => {
          if (err) throw err;

          res.status(200).json({
            token,
            user,
          });
        }
      );
      res.cookie("token", token, {
        maxAge: 900000,
        secure: false, // set to true if your using https
        httpOnly: true,
      });

      return res.status(200).send(userData);
    } catch (err) {
      console.log(err);
      let error = new CustomError("Failed to save user to database!", 500);
      return res.status(500).send(error);
    }
  } catch (err) {
    let error = new CustomError("Something went wrong", 500);
    return res.status(500).send(error);
  }
};
