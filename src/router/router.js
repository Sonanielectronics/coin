const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.post("/login", class1.a);

router.post("/transaction/:id", class1.b);

router.post("/find", class1.d);
router.post("/delete", class1.e);

module.exports = router;
