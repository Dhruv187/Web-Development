const express = require("express");
const { handleUsersignUp, handleUserlogin } = require("../controller/user");
const router = express.Router();

router.post("/", handleUsersignUp);
router.post("/login", handleUserlogin);

module.exports = router;
