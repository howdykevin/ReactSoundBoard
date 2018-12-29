import React from "react";

function Display(props) {
  return (
    <div className="border border-default rounded bg-dark text-center box mx-1 mt-1">
      <span className="text-white border-bottom" id="display">
        {props.display}
      </span>
    </div>
  );
}

export default Display;
