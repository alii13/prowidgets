const User = require("../../model/User");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var CustomError = require("../../error/customError");
const { validationResult } = require("express-validator");
require("dotenv").config();

exports.userLogin =  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({
        email,
      });
      if (!user){
      let error = new CustomError("User Not Exist!", 404);
      return res.status(404).send(error);
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch){
      let error = new CustomError("Email or password Incorrect", 401);
      return res.status(401).send(error);
      }

      const payload = {
        user: {
          id: user.id,
        }
      }


      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.TOKEN_EXPIRATION_TIME,
          //3 hrs
        },
        (err, token) => {
          if (err) throw err;
          
          res.cookie("token", token, {
            maxAge: 900000,
            secure: false, // set to true if your using https
            httpOnly: true,
          });

          res.status(200).json({
            token,
          });
        }
      );
    } catch (e) {
      console.error(e);
      let error = new CustomError("Something Went Wrong", 401);
      return res.status(500).send(error);
    }
  }