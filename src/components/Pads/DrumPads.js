import React from "react";
import soundNote from "../Sounds/Soundfile1";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }
  // Reminder: since we are adding an event listener to the whole document, we need to put it in
  // componeneDifMount and componentWillUnMount. Likewise for windows
  componentDidMount() {
    document.addEventListener("keydown", this.handlePress);
  }

  componentWillUnMount() {
    document.removeEventListener("keydown", this.handlePress);
  }

  handlePress(e) {
    if (e.keyCode === this.props.code) {
      this.playSound();
    }
  }

  playSound() {
    //it would seem that i need to put soundNote at a higher level
    let sound = document.getElementById(this.props.trigger);
    sound.currentTime = 0;
    sound.volume = this.props.vol;
    sound.play();
    console.log(sound.volume);
    this.props.power
      ? this.props.update(this.props.desc)
      : this.props.update("");
  }

  render() {
    return (
      <div
        className="border border-default d-inline-block p-3 rounded drum-pad text-center mt-1 mb-1"
        onClick={this.playSound}
        id={this.props.desc}
      >
        <audio
          className="clip"
          id={this.props.trigger}
          src={this.props.power ? this.props.url : "#"}
        />
        <h1 className="text-default">{this.props.trigger}</h1>
      </div>
    );
  }
}

export default DrumPad;
