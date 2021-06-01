import React from "react";
import Template from "./Template";

function CodeTemplate({ title, titlepara, children }) {
  return (
    <Template>
      <div className="container px-4 py-2">
        <br />
        <br />
        <header>
          <h1 className="maincolor">{title}</h1>
        </header>
        <p style={{ fontSize: "16px" }}>{titlepara}</p>
        {children}
      </div>
    </Template>
  );
}

export default CodeTemplate;
