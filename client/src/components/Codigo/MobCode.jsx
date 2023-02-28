import React from "react";
import { useParams } from "react-router-dom";
import "./MobCode.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MobCode({ mobs }) {
  const names = mobs.map((m) => m.name);
  console.log(names);
  return (
    <div className="codeMob-main">
      {/* <pre>
        <code>
          {`function eggs{
            ${names.map((m) => <p> kipper_egg zombie {m} boss </p>)}
          }`}
        </code>
      </pre> */}
      <SyntaxHighlighter language="javascript" style={darcula}>
        {`function suma(a, b) {
         ${names.map((e) => e)}
        }`}
      </SyntaxHighlighter>
    </div>
  );
}
