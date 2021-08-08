const User = require("../../model/User");
var CustomError = require("../../error/customError");

exports.deleteCarousel = async (req, res) => {
	const carouselId = req.body.carouselId;
	const _id = req.user._id;

	try {
		await User.findByIdAndUpdate(
			{ _id },
      { $pull: { "widgets.carousels": { _id: carouselId } } },
			(err, doc) => {
				if (err) throw err;
				return res.status(200).send({
					success: true,
					message: "Document Deleted Successfully! 🤸‍♂️",
				});
			}
		);
	} catch (e) {
		console.error(e);
		let error = new CustomError("Failed to delete!", 400);
		return res.status(400).send(error);
	}
};
