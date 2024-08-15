const express = require("express");
const { getData } = require("../controllers/dataCont");
const { protectRoute } = require("../middleware/protectRoute");
const router = express.Router();

router.get('/data', protectRoute, getData);

module.exports = router;