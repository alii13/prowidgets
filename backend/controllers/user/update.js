const User = require("../../model/User");
var CustomError = require("../../error/customError");

exports.userUpdate = async (req, res) => {
  const phoneNumber = req.body?.phoneNumber;
  const name = req.body?.name;
  let query;

  if (phoneNumber && name) {
    query = { $set: { name: name, phone_number: phoneNumber } };
  } else if (phoneNumber && name === undefined) {
    query = { $set: { phone_number: phoneNumber } };
  } else if (name === name && phoneNumber === undefined) {
    query = { $set: { name: name } };
  }

  try {
    await User.findOneAndUpdate({ email }, query, { new: true }, (err, doc) => {
        if(err)
        throw err;
      return res.status(200).send(doc);
    });
  } catch (e) {
    console.error(e);
    let error = new CustomError("Failed to update data", 400);
    return res.status(400).send(error);
  }
};
