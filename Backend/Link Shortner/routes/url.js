const express = require("express");
const { GenerateShortID, handleRedirect } = require("../controller/url");

const router = express.Router();

router.post("/", GenerateShortID);
router.get("/:shortId", handleRedirect);

module.exports = router;
