const { Mob } = require("../db");
const axios = require("axios");

const test = (req, res) => {
  res.send("hola");
};

const getMobs = async (req, res) => {
  try {
    const json = await Mob.findAll();

    res.status(200).send(json);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getMobInfo = async (req, res) => {
  try {
    const { id } = req.params;

    const info = await Mob.findOne({ where: { id: id } });

    res.status(200).json(info);
  } catch (error) {
    res.status(400).send(error);
  }
};
const createMob = async (req, res) => {
  try {
    const { name, team, life, color, type } = req.body;
    if (!name || !team || !color || !type) {
      return res.status(400).send("error en los datos");
    }

    const newMob = await Mob.create({
      name: name,
      team: team,
      color: color,
      mobtype: type,
      life: team === "boss" ? 1000 : 50,
    });

    res.status(200).send(newMob);
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(400).send(error);
  }
};

const deleteMob = async (req, res) => {
  try {
    const { id } = req.params;
    const info = await Mob.findOne({
      where: {
        id: id,
      },
    });

    if (info.length === 0) {
      return res.status(404).send("Mob not found!");
    } else {
      await Mob.destroy({
        where: { id: id },
      });

      return res.status(200).send("Mob deeleted successfully");
    }
  } catch (error) {}
};

const editMob = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, team, color, type } = req.body;

    const update = await Mob.update(
      {
        name: name,
        team: team,
        life: team === "boss" ? 1000 : 50,
        color: color,
        mobtype: type,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (update.length === 0) {
      return res.status(404).send("Mob not found");
    }
    res.status(200).send("Mob updated!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = {
  test,
  createMob,
  editMob,
  getMobs,
  deleteMob,
  getMobInfo,
};
