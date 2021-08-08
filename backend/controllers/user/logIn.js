const User = require("../../model/User");
var CustomError = require("../../error/customError");
require("dotenv").config();

exports.userLogin = async (req, res) => {
	const { _id } = req.user;
	const {email,name,imageUrl} = req.body;
	try {
		let user = await User.findOne({
			_id,
		});
		if (user) {
			return res.status(200).send(user);
		}

		user = new User({
			_id,
			email,
			name,
			image_url:imageUrl,
		});

		try {
			const userData = await user.save();
			return res.status(200).send(userData);
		} catch (err) {
			console.log(err);
			let error = new CustomError(err.message, 500);
			return res.status(500).send(error);
		}
	} catch (err) {
		let error = new CustomError(err.message, 500);
		return res.status(500).send(error);
	}
};
