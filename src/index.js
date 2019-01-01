import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Pads/PadBoard";
import Display from "./components/Controls/Display";
import Power from "./components/Controls/PowerMode";
import Volume from "./components/Controls/Volume";
import Tracks from "./components/Controls/SoundTracks";
import Alpha from "./components/Sounds/Soundfile1";
import Beta from "./components/Sounds/Soundfile2";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Holt&TerryClips",
      power: true,
      volume: 1,
      selectedOption: "Holt&TerryClips",
      track: Alpha
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.togglePower = this.togglePower.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.updateTracks = this.updateTracks.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#B4B8AB";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  togglePower() {
    this.setState({
      power: !this.state.power
    });
  }

  updateDisplay(name) {
    this.setState({
      display: name
    });
  }

  changeVolume(event) {
    console.log(event.target.value);
    let sound = event.target.value / 100;
    this.setState({
      volume: sound
    });
  }

  updateTracks(name) {
    let value;
    if (name === "Holt&TerryClips") {
      value = Alpha;
    } else if (name === "Jake&BoyleClips") {
      value = Beta;
    }
    this.setState(
      {
        track: value
      },
      () => console.log(this.state.track)
    );
  }

  handleOptionChange(event) {
    console.log(event.target.value);
    this.setState({
      selectedOption: event.target.value
    });
    this.updateDisplay(event.target.value);
    this.updateTracks(event.target.value);
  }

  render() {
    return (
      <div className="container-fluid" id="drum-machine">
        <div className="row d-flex flex-column mt-5">
          <div className="game mx-auto border border-default controls bg-secondary rounded-top">
            <Power state={this.state.power} toggle={this.togglePower} />
            <Tracks
              selected={this.state.selectedOption}
              options={this.handleOptionChange}
            />
            <Volume change={this.changeVolume} />
            <Display display={this.state.display} />
          </div>
        </div>
        <Board
          update={this.updateDisplay}
          power={this.state.power}
          vol={this.state.volume}
          clip={this.state.track}
        />
        <div className="text-center">
          Coded by Kevin.G
          <br />
          Powered by https://holt-soundboard.github.io/
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
