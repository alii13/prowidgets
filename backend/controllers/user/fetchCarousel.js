const User = require("../../model/User");
var CustomError = require("../../error/customError");

require("dotenv").config();
exports.fetchCarousel = async (req, res) => {
    const carouselId = req.body.carouselId;
  try {
    await User.find({"widgets.carousels._id":carouselId}, (err, doc) => {
      if (err) throw err;
      return res.status(200).send(doc);
    });
  } catch (e) {
    console.error(e);
    let error = new CustomError(e.message, 400);
    return res.status(400).send(error);
  }
};
