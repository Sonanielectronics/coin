const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.get("/", class1.a);

router.post("/login", class1.b);

router.post("/transaction/:id", class1.c);

router.post("/find", class1.d);
router.post("/delete", class1.e);

module.exports = router;
