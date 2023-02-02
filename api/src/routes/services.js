const {Mob}=require('../db')
const axios = require('axios')


const test = (req, res) => {
  res.send("hola");
};

const getMobs = async (req,res) =>{
  try {
    const json = await Mob.findAll()

    res.status(200).send(json)
  } catch (error) {
    
  }
}

const createMob = async (req, res) => {
try {
  const { name, team, life , color, type } = req.body;
  if (!name || !team || !life ||!color || !type) {
    return res.status(400).send("error en los datos");
  }

  const newMob = await Mob.create({
    name: name, 
    team: team,
    life: life, 
    color: color,
    mobType: type,
  })


  res.status(200).send(newMob)
} catch (error) {
  console.log("ERROR: ", error);
    res.status(400).send(error);
}
}

const editMob =async(req, res)=>{
  try {
    const { id } = req.params;
    const { name, team, life , color, type } = req.body;

    const update = await Mob.update(
      {
        name: name,
        team: team,
        life: life,
        color: color,
        type: type,
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
    console.log(error)
    res.status(400).send(error);
  }
}

module.exports = { 
  test,
  createMob,
  editMob,
  getMobs
};
