const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	_id: { type: String }, //
	email: { type: String },
	name: { type: String },
	image_url: { type: String },
	widgets: {
		carousels: [
			{
				_id: { type: String },
				carousel_id: { type: String },
				name: { type: String },
				url_id: { type: String },
				bullets: { type: Boolean },
				arrows: { type: Boolean },
				image_orienation: { type: String, default: "cover" },
				bg_color: { type: String, default: "#F3F3F3" },
				images: [
					{
						_id: { type: String },
						url: { type: String },
						name: { type: String },
					},
				],
				createdAt: {
					type: Date,
					default: Date.now(),
				},
			},
		],
		buttons: {
			type: Array,
		},
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

let User = mongoose.model("user", UserSchema);
module.exports = User;
