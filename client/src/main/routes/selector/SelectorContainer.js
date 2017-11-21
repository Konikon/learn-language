import React from "react";
import "./selector.css";
import "./selector-page.png";

function SelectorContainer(){
  return(
    <div style={{ padding: 10 }} className="selector-wrapp">
        <div >
          <button className="btn btn-success">Easy</button>
          <button className="btn btn-default">Medium</button>
          <button className="btn btn-default">Hard</button>
        </div>
        <div >
          {/*// <SplitButton bstyle="primary" title="Select your language package" dropup pullRight className="btn btn-primary">
          //     <MenuItem className="btn btn-default">Vietnamese</MenuItem>
          //     <MenuItem className="btn btn-default">Spanish</MenuItem>
          // </SplitButton */}
        </div>
      </div>
  )
}

export default SelectorContainer;
