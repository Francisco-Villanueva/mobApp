const expres = require("express");
const router = expres.Router();

const { test } = require("./services");

router.get("/test", test);
module.exports = router;
