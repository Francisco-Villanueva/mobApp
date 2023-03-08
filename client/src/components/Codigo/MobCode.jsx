import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import "./MobCode.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  darcula,
  tomorrow,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MobCode({ mobs }) {
  const allyArr = mobs.filter((m) => m.team !== "boss");
  const bossArr = mobs.filter((m) => m.team !== "ally");
  const mobsOrder = bossArr.concat(allyArr);
  // console.log("ALLY: ", allyArr);
  const nameTag = (name) => {
    let splitName = name.match(/\b\w+\b/g);
    if (splitName.length === 1) {
      return name;
    } else {
      return "<" + name + ">";
    }
  };

  const numberIndex = (num) => {
    switch (num) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      case 7:
        return "seven";
      case 8:
        return "eight";
      case 9:
        return "nine";
      case 10:
        return "ten";
      case 11:
        return "eleven";

      default:
        break;
    }
  };
  return (
    <div className="codeMob-main">
      <SyntaxHighlighter
        className="code-style"
        language="javascript"
        style={darcula}
      >
        {`import ./macros/aoe_projectile.mcm
import ./macros/spawn_aoe_projectile.mcm
import ./macros/deal_damage.mcm
import ./macros/explode.mcm
import ./macros/fake_explode.mcm
import ./macros/kano_tools.mcm
import ./macros/kip_common.mcm
import ./macros/vms.mcm

#ASCII Fonts
#Electronic
#ANSI Regular
#Ogre
#Slant
#Small
#Avatar

# ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄  
#▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ 
#▐░▌          ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌
#▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌
#▐░▌          ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌
#▐░▌          ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌
#▐░▌          ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌
#▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌
#▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░▌ 
# ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀  
function load{

    #Starts scheduled functions
    schedule function kip:tick_1s 1s

    #Creates scoreboards and grants recipes
    kipper_load
}

# ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄               ▄  ▄▄▄▄▄▄▄▄▄▄▄ 
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌             ▐░▌▐░░░░░░░░░░░▌
#▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀  ▐░▌           ▐░▌ ▐░█▀▀▀▀▀▀▀▀▀ 
#▐░▌               ▐░▌       ▐░▌         ▐░▌  ▐░▌          
#▐░▌ ▄▄▄▄▄▄▄▄      ▐░▌        ▐░▌       ▐░▌   ▐░█▄▄▄▄▄▄▄▄▄ 
#▐░▌▐░░░░░░░░▌     ▐░▌         ▐░▌     ▐░▌    ▐░░░░░░░░░░░▌
#▐░▌ ▀▀▀▀▀▀█░▌     ▐░▌          ▐░▌   ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ 
#▐░▌       ▐░▌     ▐░▌           ▐░▌ ▐░▌      ▐░▌          
#▐░█▄▄▄▄▄▄▄█░▌ ▄▄▄▄█░█▄▄▄▄        ▐░▐░▌       ▐░█▄▄▄▄▄▄▄▄▄ 
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌        ▐░▌        ▐░░░░░░░░░░░▌
# ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀          ▀          ▀▀▀▀▀▀▀▀▀▀▀ 
#This is where you'll make the spawn eggs for each mob. Generally make the spawn egg type the same as the model base (not the in-game base if different), but it'll always
#Summon a marker with nbt to be turned into the right mob up in the Spawn Egg section.
#The Macro handles most everything for you so it can look clean and be pretty easy. Here's how it works:
#kipper_egg [base_mob] [Name] ["boss" or mob's number spelled out]

dir give{

  function eggs{
          
   ${bossArr
     .map(
       (e, i) =>
         `\t\t kipper_egg zombie ${nameTag(e.name)} ${e.team} ${numberIndex(
           i + 1
         )}\n `
     )
     .join("")}${allyArr
          .map(
            (e, i) =>
              `\t\t kipper_egg zombie ${nameTag(e.name)} ${
                e.team
              } ${numberIndex(i + 1)}\n `
          )
          .join("")}
          
  }

  function sword{
    give @s diamond_sword{AttributeModifiers:[{AttributeName:"generic.attack_damage",Name:"generic.attack_damage",Amount:-2147483647,Operation:0,UUID:[I;980754466,-885964612,-1405051231,1537106993],Slot:"mainhand"},{AttributeName:"generic.attack_speed",Name:"generic.attack_speed",Amount:-2.1,Operation:0,UUID:[I;1348935930,-907001148,-1077164467,1443297864],Slot:"mainhand"}]}
  }
  function piglin_egg{
      give @s piglin_spawn_egg{EntityTag:{CustomName:"",HandItems:[{Count:1b,id:"crossbow"}],id:"piglin"},display:{Name:'{"italic":false,"color":"white","extra":[{"italic":false,"color":"yellow","text":"(Crossbow Only)"}],"text":"Piglin Spawn Egg "}'}}
  }
}

# ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄ 
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌
#▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀▀▀ 
#▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌          
#▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌   ▄   ▐░▌▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄▄▄ 
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌
# ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌ ▐░▌░▌ ▐░▌▐░▌   ▐░▌ ▐░▌ ▀▀▀▀▀▀▀▀▀█░▌
#          ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌▐░▌    ▐░▌▐░▌          ▐░▌
# ▄▄▄▄▄▄▄▄▄█░▌▐░▌          ▐░▌       ▐░▌▐░▌░▌   ▐░▐░▌▐░▌     ▐░▐░▌ ▄▄▄▄▄▄▄▄▄█░▌
#▐░░░░░░░░░░░▌▐░▌          ▐░▌       ▐░▌▐░░▌     ▐░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌
# ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀         ▀  ▀▀       ▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀ 
#This is where the functions for each mob's spawn from the Spawn Egg are made.
#Notable for being where you'll define the type of mob (for cases where it differs from the Egg type),
#as well as where you'll want to set its scale.

dir spawns{
  #    ___               
  #   / __\ ___  ___ ___ 
  #  /__\/// _ \/ __/ __|
  # / \/  \ (_) \__ \__ \
  # \_____/\___/|___/___/
  #Summon for boss mob
  #Note that the boss should always be vulnerable and is not affected by the mob_deaths_disable trigger
  #The Macro handles most everything for you so it can look clean and be pretty easy. Here's how it works:
  #kipper_boss [base_mob] [Name] [Color of name] [Health as X.0 (no f)] [Additional NBT (optional)]

${bossArr
  .map(
    (e, i) =>
      `function mob_boss_${numberIndex(i + 1)} { \n` +
      `kipper_boss ${e.mobtype} ${e.name} ${e.color}  1000.0 Silent:0b\n ` +
      "}\n"
  )
  .join("")}

  #    _   _ _ _           
  #   /_\ | | (_) ___  ___ 
  #  //_\\| | | |/ _ \/ __|
  # /  _  \ | | |  __/\__ \
  # \_/ \_/_|_|_|\___||___/
  #Each ally has its own Spawn function. Should not be renamed, as these are what get called by the spawn eggs!
  #The Macro handles most everything for you so it can look clean and be pretty easy. Here's how it works:
  #kipper_ally [base_mob] [Name] [Color of name] [which mob number it is, spelled out] [Health as X.0 (no f)] [Additional NBT (optional)]

${allyArr
  .map(
    (e, i) =>
      `function ally_${numberIndex(i + 1)} { \n` +
      `kipper_ally ${e.mobtype} ${e.name} ${e.color} ${
        i + 1
      } 50.0 Silent:0b\n ` +
      "}\n"
  )
  .join("")}


#    ___          _                             
#   / __\___  ___| |_ _   _ _ __ ___   ___  ___ 
#  / /  / _ \/ __| __| | | |  
# / /__| (_) \__ \ |_| |_| | | | | | |  __/\__ \
# \____/\___/|___/\__|\__,_|_| |_| |_|\___||___/

    #Each mob also gets a costume function. In theory the only thing you need to change is the mob type and the scale, if any.
    #These costumes don't need to care about vulnerability. They only exist as basically a temporary costume for the player.
    #The Macro handles most everything for you so it can look clean and be pretty easy. Here's how it works:
    #kipper_costume [base_mob] [Name] [Color of name] [Additional NBT (optional)]

${bossArr
  .map(
    (e, i) =>
      `function costume_boss_${numberIndex(i + 1)} {\n` +
      `kipper_costume ${e.team}  ${e.mobtype} ${e.name} ${e.color}  Silent:0b\n ` +
      "}\n"
  )
  .join("")}
${allyArr
  .map(
    (e, i) =>
      `function costume_${numberIndex(i + 1)} {\n` +
      `kipper_costume ${e.team} ${e.mobtype} ${e.name} ${e.color}  Silent:0b\n ` +
      "}\n"
  )
  .join("")}



}
# ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄    ▄ 
#▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌
# ▀▀▀▀█░█▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌ ▐░▌ 
#     ▐░▌          ▐░▌     ▐░▌          ▐░▌▐░▌  
#     ▐░▌          ▐░▌     ▐░▌          ▐░▌░▌   
#     ▐░▌          ▐░▌     ▐░▌          ▐░░▌    
#     ▐░▌          ▐░▌     ▐░▌          ▐░▌░▌   
#     ▐░▌          ▐░▌     ▐░▌          ▐░▌▐░▌  
#     ▐░▌      ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▌ 
#     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌
#      ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀    ▀ 

function tick{

  #████████ ██  ██████ ██   ██     ██████  ██       █████  ██    ██ ███████ ██████  
  #   ██    ██ ██      ██  ██      ██   ██ ██      ██   ██  ██  ██  ██      ██   ██ 
  #   ██    ██ ██      █████       ██████  ██      ███████   ████   █████   ██████  
  #   ██    ██ ██      ██  ██      ██      ██      ██   ██    ██    ██      ██   ██ 
  #   ██    ██  ██████ ██   ██     ██      ███████ ██   ██    ██    ███████ ██   ██ 
  #Runs player tick functions
  execute as @a at @s run {
      name tick_player
      #Cooldown countdown
      scoreboard players add @s kip.tech.timer 0
      execute if score @s kip.tech.timer matches 1.. run scoreboard players remove @s kip.tech.timer 1

      #Checks for used warped fungus stick
      execute if entity @s[scores={kip.use_wstick=1..,kip.tech.timer=0}] run function kip:items/wstick_use
      scoreboard players set @s kip.use_wstick 0

      #Removes target tag when not in survival
      tag @s[gamemode=!survival] remove kip.target

     #
     #
     # triggers
     #
     #
     # 

      #New give trigger
      scoreboard players enable @s give_all_items
      execute if score @s give_all_items matches 1.. run {
          name give_all_items
          setblock ~ ~ ~ minecraft:shulker_box
          scoreboard players set @s give_all_items 0
      }

      #Mob control triggers macro
      kipper_mob_control_triggers
  }
  #████████ ██  ██████ ██   ██     ███████ ███    ██ ████████ ██ ████████ ██ ███████ ███████ 
  #   ██    ██ ██      ██  ██      ██      ████   ██    ██    ██    ██    ██ ██      ██      
  #   ██    ██ ██      █████       █████   ██ ██  ██    ██    ██    ██    ██ █████   ███████ 
  #   ██    ██ ██      ██  ██      ██      ██  ██ ██    ██    ██    ██    ██ ██           ██ 
  #   ██    ██  ██████ ██   ██     ███████ ██   ████    ██    ██    ██    ██ ███████ ███████ 
  #Runs entity-specific functions
  execute as @e[type=!player] at @s run {
    name tick_entities
  #
  # SPAWN EGGS
  #
  #
  #
  #Spawn Egg summons
  #This is where the Markers that come out of the Spawn Egg items (Give section) become the appropriate mob.
  #This way, you can define a summon animation or otherwise just scale them up appropriately in their Spawn function
       
       
    execute if entity @s[tag=kip.summon] run {
    name spawn_eggs_shared
    ${bossArr
      .map(
        (e, i) =>
          `\texecute if entity @s[tag=kip.summon.boss_${numberIndex(
            i + 1
          )}] run function kip:spawns/mob_boss_${numberIndex(i + 1)} \n`
      )
      .join("")}${allyArr
          .map(
            (e, i) =>
              `\texecute if entity @s[tag=kip.summon.${numberIndex(
                i + 1
              )}] run function kip:spawns/ally_${numberIndex(i + 1)} \n`
          )
          .join("")}
          kill @s
    }

    #costume behavior macro. Do not remove!
    kipper_costume_behavior

    #
    # CUSTOM MOBS
    #
    #
    #
    #Custom Mobs Behavior
    #This is where the behavior for all of the remodeled mobs is covered and broken down by subsection.
 
    execute if entity @s[tag=kip.mob] run { // REF #1 START
      name mob_shared_behavior

      #Macro for mob control trigger settings. Do not remove!
      kipper_mob_trigger_settings

      #
      #
      # TARGET SETTINGS
      #
      #
      #Determines how mobs seek out their targets. Right now all ally mobs share the same target-seeking parameters, 
      #but you can break it up for specific mobs if you want. The ally_line_of_sight function checks
      #that they aren't targeting something they can't see. Note that this isn't perfect, as if one mob targets a mob,
      #it'll be considered a valid target for all of them.
      #Generally, you probably don't need to change this section.
      #If mobs_attack enabled, searches for target

      execute if entity @s[tag=kip.can_attack] run { // #REF 2
        name mob_target_seek

        #Boss
 ${bossArr
   .map(
     (e, i) =>
       `\t\texecute if entity @s[tag=kip.mob.boss_${numberIndex(
         i + 1
       )}] anchored eyes run {
                  name boss_seek
                  execute as @e[tag=kip.mob.ally,distance=..20] run {
                      name boss_line_of_sight
                      LOOP(20,i){
                          execute unless entity @s[tag=kip.blocked] facing entity @s feet positioned ^ ^ ^<%i%> run tag @s[type=#kip:mobs,tag=!kip.mob.boss,distance=..3] add kip.target 
                          execute unless entity @s[tag=kip.blocked] facing entity @s feet positioned ^ ^ ^<%i%> run tag @e[type=player,distance=..3] add kip.target 
                          execute unless entity @s[tag=kip.blocked] facing entity @s feet positioned ^ ^ ^<%i%> unless block ~ ~ ~ #kip:nonsolid run tag @s add kip.blocked
                      }
                      tag @s remove kip.blocked
                  }
              } \n`
   )
   .join("")}
       

        #Allies

      } // #REF 2 END


    }  // REF #1 END
    
} // end function tick
 
        
`}
      </SyntaxHighlighter>
    </div>
  );
}
