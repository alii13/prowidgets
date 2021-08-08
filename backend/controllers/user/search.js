const User = require("../../model/User");
require("dotenv").config();
var CustomError = require("../../error/customError");

exports.searchUser = async (req, res) => {
  const email = req.body?.email;
  const name = req.body?.name;

  const query = (name)?{name:name}:{email:email}

  try {
    await User.find(query, (err, doc) => {
      if (err) throw err;

      let totalPagesCount = doc.length / parseInt(process.env.SEARCH_USERS);

      let result = [];
      for (let i = 0; i < totalPagesCount; i++) {
        //    const pageIndex = `pageIndex${i}`;
        result.push({ page: [] });
      }

      doc.forEach((user, i) => {
        result[Math.floor(i / parseInt(process.env.SEARCH_USERS))].page.push(user);
      });
      return res.status(200).send(result);
    });
  } catch (e) {
    console.error(e);
    let error = new CustomError("Failed to search users", 400);
    return res.status(400).send(error);
  }
};
