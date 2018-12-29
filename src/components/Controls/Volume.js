import React from "react";

function Volume(props) {
  return (
    <div className="form-group mt-2 px-2">
      <label hmtlfor="volume ">Volume:</label>
      <input
        type="range"
        className="form-control-range"
        min="1"
        max="100"
        id="volume"
        onInput={props.change}
      />
    </div>
  );
}

export default Volume;
