import React from "react";

function Power(props) {
  return (
    <button
      className={
        props.state
          ? "btn-success btn ml-3 mt-2 col-3"
          : "btn-danger btn ml-3 mt-2 col-3"
      }
      onClick={props.toggle}
    >
      {props.state ? "ON" : "OFF"}
    </button>
  );
}

export default Power;
