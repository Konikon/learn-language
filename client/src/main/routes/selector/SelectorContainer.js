import React from "react";
import "./selector.css";
import "./selector-page.png";

function SelectorContainer(){
  return(
      <div style={{ padding: 10 }} className="selector-wrapp">
        <button className="btn btn-success">Easy</button>
        <button className="btn btn-default">Medium</button>
        <button className="btn btn-default">Hard</button>
      </div>
  )
}

export default SelectorContainer;
