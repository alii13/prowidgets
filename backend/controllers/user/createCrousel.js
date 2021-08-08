const User = require("../../model/User");
var CustomError = require("../../error/customError");

exports.createCrousel = async (req, res) => {
	const { _id } = req.user;
	const carouselData = req.body.carouselData;
	try {
		 User.findOneAndUpdate(
			{ _id },
			{
				$push: { "widgets.carousels": carouselData },
			},
			{ upsert: true, new: true },
			(err, doc) => {
				if (err) throw err;
				return res.status(200).send(doc);
			}
		);
	} catch (e) {
		console.error(e);
		let error = new CustomError(e.message, 400);
		return res.status(400).send(error);
	}
};
