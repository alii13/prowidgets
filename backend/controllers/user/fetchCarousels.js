const User = require("../../model/User");
var CustomError = require("../../error/customError");

require("dotenv").config();
exports.fetchCarousels = async (req, res) => {
    const userId = req.user._id;
  try {
    await User.find({_id:userId}, (err, doc) => {
      if (err) throw err;
      return res.status(200).send({success:true,doc});
    });
  } catch (e) {
    console.error(e);
    let error = new CustomError(e.message, 400);
    return res.status(400).send(error);
  }
};
