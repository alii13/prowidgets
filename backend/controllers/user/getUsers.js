const User = require("../../model/User");
var CustomError = require("../../error/customError");

require("dotenv").config();
exports.getUsers = async (req, res) => {

  try {
    await User.find({}, (err, doc) => {
      if (err) throw err;

      let totalPagesCount = doc.length / parseInt(process.env.PAGINATION);

      let result = [];
      for (let i = 0; i < totalPagesCount; i++) {
        //    const pageIndex = `pageIndex${i}`;
        result.push({ page: [] });
      }

      doc.forEach((user, i) => {
        result[Math.floor(i / parseInt(process.env.PAGINATION))].page.push(user);
      });
      return res.status(200).send(result);
    });
  } catch (e) {
    console.error(e);
    let error = new CustomError("Failed to get users", 400);
    return res.status(400).send(error);
  }
};
