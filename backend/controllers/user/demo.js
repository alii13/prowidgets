var CustomError = require("../../error/customError");

require("dotenv").config();
exports.demo = async (req, res) => {
  try {
      return res.status(200).send(req.user);
  } catch (e) {
    console.error(e);
    let error = new CustomError("Failed to give user obj", 400);
    return res.status(400).send(error);
  }
};
