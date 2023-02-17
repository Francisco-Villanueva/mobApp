const expres = require("express");
const router = expres.Router();

const {
  test,
  createMob,
  editMob,
  getMobs,
  deleteMob,
  getMobInfo,
} = require("./services");

router.get("/test", test);
router.get("/mobs", getMobs);
router.get("/mobs/:id", getMobInfo);
router.post("/createMob", createMob);
router.delete("/deleteMob/:id", deleteMob);
router.put("/editMob/:id", editMob);
module.exports = router;
