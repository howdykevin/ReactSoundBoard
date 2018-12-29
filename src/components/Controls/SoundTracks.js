import React from "react";

function Options(props) {
  return (
    <form className="d-inline-block ml-5">
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Holt&TerryClips"
            checked={props.selected === "Holt&TerryClips"}
            onChange={props.options}
          />
          Holt&TerryClips
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Jake&BoyleClips"
            checked={props.selected === "Jake&BoyleClips"}
            onChange={props.options}
          />
          Jake&BoyleClips
        </label>
      </div>
    </form>
  );
}

export default Options;
