import React from "react";
import soundNote from "../Sounds/Soundfile1";
import Drum from "./DrumPads";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let padBank = this.props.clip.map((item, index) => {
      return (
        <Drum
          key={item.keyTrigger}
          trigger={item.keyTrigger}
          code={item.keycode}
          url={item.url}
          desc={item.name}
          update={this.props.update}
          power={this.props.power}
          vol={this.props.vol}
        />
      );
    });
    return (
      <div className="row">
        <div className="game border border-default d-flex justify-content-around flex-wrap mx-auto bg-warning">
          {padBank}
        </div>
      </div>
    );
  }
}

export default Board;
