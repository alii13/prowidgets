const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { userSignUp } = require("../controllers/user/signUp");
const { userLogin } = require("../controllers/user/logIn");
const { createCrousel } = require("../controllers/user/createCrousel");
const { fetchCarousel } = require("../controllers/user/fetchCarousel");
const { updateCarousel } = require("../controllers/user/updateCarousel");
const { fetchCarousels } = require("../controllers/user/fetchCarousels");
const { userUpdate } = require("../controllers/user/update");
const { deleteCarousel } = require("../controllers/user/deleteCarousel");
const { getUsers } = require("../controllers/user/getUsers");
const { demo } = require("../controllers/user/demo");
const { searchUser } = require("../controllers/user/search");
const verifyToken = require("../middleware/auth");

require("dotenv").config();

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 * @body - email, password, name, phoneNumber
 * @protected - false
 */

router.post(
	"/signup",
	[
		check("email", "Please enter a valid email").isEmail(),
		check("password", "Please enter a valid password").isLength({
			min: 6,
		}),
	],
	userSignUp
);

/**
 * @method - POST
 * @param - /login
 * @description - User Login
 * @body - email, password
 * @protected - false
 */

router.get("/demo", verifyToken, demo);

/**
 * @method - GET
 * @param - /login
 * @description - User Login
 * @protected - true
 */

router.post("/login", verifyToken, userLogin);

/**
 * @method - POST
 * @param - /search-user
 * @description - used to search user in database
 * @body - email or name
 * @protected - true
 */

router.post("/create-carousel", verifyToken, createCrousel);

router.post("/fetch-carousel", fetchCarousel);
router.post("/update-carousel",verifyToken, updateCarousel);
router.post("/fetch-carousels",verifyToken, fetchCarousels);

/**
 * @method - POST
 * @param - /search-user
 * @description - used to search user in database
 * @body - email or name
 * @protected - true
 */

router.post("/search-user", verifyToken, searchUser);

/**
 * @method - GET
 * @param - /get-users
 * @description - fetch users
 * @body - email or name
 * @protected - true
 */

router.get("/get-users", verifyToken, getUsers);

/**
 * @method - PUT
 * @param - /update
 * @description - update user data ( name, phone only)
 * @body - email or name
 * @protected - true
 */

router.put(
	"/update",
	[check("email", "Please enter a valid email").isEmail()],
	userUpdate
);

/**
 * @method - DELETE
 * @param - /delete
 * @description - delete user
 * @body - email
 * @protected - true
 */

router.post("/delete-carousel", verifyToken, deleteCarousel);

module.exports = router;
