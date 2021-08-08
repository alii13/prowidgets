let CustomError = require("../error/customError");
require("dotenv").config();

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = async (token) => {
		const ticket = await client.verifyIdToken(
			{
				idToken: token,
				audience: process.env.GOOGLE_CLIENT_ID,
			}
		);
		const payload = ticket.getPayload();
		return payload;
};

const verifyToken = async (req, res, next) => {
	const authorizationArray = req.headers.authorization.split(" ") || [];
	const token = authorizationArray[1] || "";
	try {
		const payload = await googleAuth(token);
		const { sub } = payload;
		console.log(sub,"subb");
		if (!sub) {
			return res.status(401).json("You need to Login first ✋");
		}
		req.user = {
			_id: sub,
		};
		next();
	} catch (err) {
		let error = new CustomError(err.toString(), 500);
		return res.status(500).send(error);
	}
};
module.exports = verifyToken;
