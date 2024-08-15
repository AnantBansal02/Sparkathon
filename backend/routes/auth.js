const express = require("express");
const {signup,login,logout} = require("../controllers/authCont");
const { protectRoute } = require("../middleware/protectRoute");
const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', protectRoute, logout);

module.exports = router;