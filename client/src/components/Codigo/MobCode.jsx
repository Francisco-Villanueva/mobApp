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

  // console.log("ALLY: ", allyArr);
  return (
    <div className="codeMob-main">
      <SyntaxHighlighter
        className="code-style"
        language="javascript"
        style={darcula}
      >
        {` CODE FOR MOBS
function eggs{
        
 ${mobs.map((e) => "\t\t kipper_egg zombie <" + e.name + "> " + e.team + "\n")}
        
}
        

// GENERAR UN ARRAY CON TODOS LOS ALLY Y HACER UN FOREACH Y GENERAR SU FUNCION
${allyArr.map(
  (e, i) =>
    `function ally_${i + 1} \n` +
    `kipper_ally ${e.mobtype} ${e.name} ${e.color} one 50.0 Silent:0b\n ` +
    "}"
)}

 
   
 
        
        `}
      </SyntaxHighlighter>
    </div>
  );
}
