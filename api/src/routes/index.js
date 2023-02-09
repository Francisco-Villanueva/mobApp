const expres = require("express");
const router = expres.Router();

const { test, createMob, editMob, getMobs, deleteMob } = require("./services");

router.get("/test", test);
router.get("/mobs", getMobs);
router.post("/createMob", createMob);
router.delete("/deleteMob/:id", deleteMob);
router.put("/editMob/:id", editMob);
module.exports = router;
