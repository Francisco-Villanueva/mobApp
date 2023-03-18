const expres = require("express");
const router = expres.Router();

const {
  test,
  createMob,
  editMob,
  getMobs,
  deleteMob,
  getMobInfo,
  getModels,
  newModel,
} = require("./services");

router.get("/test", test);
router.get("/mobs", getMobs);
router.get("/models", getModels);
router.post("/models", newModel);
router.get("/mobs/:id", getMobInfo);
router.post("/createMob", createMob);
router.delete("/deleteMob/:id", deleteMob);
router.put("/editMob/:id", editMob);
module.exports = router;
