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

  // console.log("ALLY: ", allyArr);
  return (
    <div className="codeMob-main">
      <SyntaxHighlighter
        className="code-style"
        language="javascript"
        style={darcula}
      >
        {` CODE FOR MOBS

// GIVE
function eggs{
        
 ${mobs.map((e) => "\t\t kipper_egg zombie <" + e.name + "> " + e.team + "\n")}
        
}

//SPAWNS

dir spawns{

// GENERAR UN ARRAY CON TODOS LOS ALLY Y HACER UN FOREACH Y GENERAR SU FUNCION
${bossArr.map(
  (e, i) =>
    `function mob_boss { \n` +
    `kipper_boss ${e.mobtype} ${e.name} ${e.color}  1000.0 Silent:0b\n ` +
    "}"
)}
// GENERAR UN ARRAY CON TODOS LOS ALLY Y HACER UN FOREACH Y GENERAR SU FUNCION
${allyArr.map(
  (e, i) =>
    `function ally_${i + 1} { \n` +
    `kipper_ally ${e.mobtype} ${e.name} ${e.color} ${i + 1} 50.0 Silent:0b\n ` +
    "}"
)}

        // COSTUMES


${mobs.map((e, i) =>
  e.team === "boss"
    ? `function costume_boss {\n` +
      `kipper_costume ${e.team}  ${e.mobtype} ${e.name} ${e.color}  Silent:0b\n ` +
      "}"
    : `function costume_${i + 1} {\n` +
      `kipper_costume ${e.team} ${e.mobtype} ${e.name} ${e.color}  Silent:0b\n ` +
      "}"
)}

}   //CIERRE DE "dir spwans"
 
        
        `}
      </SyntaxHighlighter>
    </div>
  );
}
