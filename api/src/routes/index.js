const expres = require("express");
const router = expres.Router();

const { test, createMob, editMob, getMobs } = require("./services");

router.get("/test", test);
router.get("/mobs", getMobs);
router.post("/createMob", createMob);
router.put("/editMob/:id", editMob);
module.exports = router;
