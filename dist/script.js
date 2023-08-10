// audio samples
const heater1 = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
const heater2 = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
const heater3 = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
const heater4 = "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
const clap = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
const openhh = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
const kicknhat = "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
const kick = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
const closedhh = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.playSound = this.playSound.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);

    this.state = {
      display: "" };

  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
    switch (event.key) {
      case "Q":
      case "q":
        this.playSound("Q");
        break;
      case "W":
      case "w":
        this.playSound("W");
        break;
      case "E":
      case "e":
        this.playSound("E");
        break;
      case "A":
      case "a":
        this.playSound("A");
        break;
      case "S":
      case "s":
        this.playSound("S");
        break;
      case "D":
      case "d":
        this.playSound("D");
        break;
      case "Z":
      case "z":
        this.playSound("Z");
        break;
      case "X":
      case "x":
        this.playSound("X");
        break;
      case "C":
      case "c":
        this.playSound("C");
        break;
      default:
        this.handleDisplay(null);
        break;}

  }

  handleClick(event) {
    switch (event.target.textContent) {
      case "Q":
        this.playSound(event.target.textContent);
        break;
      case "W":
        this.playSound(event.target.textContent);
        break;
      case "E":
        this.playSound(event.target.textContent);
        break;
      case "A":
        this.playSound(event.target.textContent);
        break;
      case "S":
        this.playSound(event.target.textContent);
        break;
      case "D":
        this.playSound(event.target.textContent);
        break;
      case "Z":
        this.playSound(event.target.textContent);
        break;
      case "X":
        this.playSound(event.target.textContent);
        break;
      case "C":
        this.playSound(event.target.textContent);
        break;
      default:
        this.handleDisplay(null);
        break;}

  }

  playSound(id) {
    var audio = document.getElementById(id);
    this.handleDisplay(id);
    audio.play();
  }

  handleDisplay(id) {
    switch (id) {
      case "Q":
        this.updateDisplay("Heater 1");
        break;
      case "W":
        this.updateDisplay("Heater 2");
        break;
      case "E":
        this.updateDisplay("Heater 3");
        break;
      case "A":
        this.updateDisplay("Heater 4");
        break;
      case "S":
        this.updateDisplay("Clap");
        break;
      case "D":
        this.updateDisplay("Open-HH");
        break;
      case "Z":
        this.updateDisplay("Kick-n'-Hat");
        break;
      case "X":
        this.updateDisplay("Kick");
        break;
      case "C":
        this.updateDisplay("Closed-HH");
        break;
      case null:
        this.updateDisplay("");
        break;}

  }

  updateDisplay(text) {
    this.setState({
      display: text });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine", onKeyDown: this.handleKeyPress }, /*#__PURE__*/
      React.createElement("p", null, this.state.test), /*#__PURE__*/
      React.createElement("div", { id: "buttons" }, /*#__PURE__*/
      React.createElement("label", { id: "heater1", name: "Q", href: "#", className: "drum-pad", onClick: this.handleClick }, "Q", /*#__PURE__*/

      React.createElement("audio", { id: "Q", className: "clip", src: heater1, preload: "auto", crossorigin: true })), /*#__PURE__*/

      React.createElement("label", { id: "heater2", name: "Q", href: "#", className: "drum-pad", onClick: this.handleClick }, "W", /*#__PURE__*/

      React.createElement("audio", { id: "W", className: "clip", src: heater2, preload: "auto", crossorigin: true })), /*#__PURE__*/

      React.createElement("label", { id: "heater3", name: "Q", href: "#", className: "drum-pad", onClick: this.handleClick }, "E", /*#__PURE__*/

      React.createElement("audio", { id: "E", className: "clip", src: heater3, preload: "auto", crossorigin: true })), /*#__PURE__*/

      React.createElement("label", { id: "heater4", name: "Q", href: "#", className: "drum-pad", onClick: this.handleClick }, "A", /*#__PURE__*/

      React.createElement("audio", { id: "A", className: "clip", src: heater4, preload: "auto", crossorigin: true })), /*#__PURE__*/

      React.createElement("label", { id: "clap", name: "Q", href: "#", className: "drum-pad", onClick: this.handleClick }, "S", /*#__PURE__*/

      React.createElement("audio", { id: "S", className: "clip", src: clap, preload: "auto", crossorigin: true })), /*#__PURE__*/

      React.createElement("label", { id: "openhh", name: "Q", href: "#", className: "drum-pad", onClick: this.handleClick }, "D", /*#__PURE__*/

      React.createElement("audio", { id: "D", className: "clip", src: openhh, preload: "auto", crossorigin: true })), /*#__PURE__*/

      React.createElement("label", { id: "kicknhat", name: "Q", href: "#", className: "drum-pad", onClick: this.handleClick }, "Z", /*#__PURE__*/

      React.createElement("audio", { id: "Z", className: "clip", src: kicknhat, preload: "auto", crossorigin: true })), /*#__PURE__*/

      React.createElement("label", { id: "kick", name: "Q", href: "#", className: "drum-pad", onClick: this.handleClick }, "X", /*#__PURE__*/

      React.createElement("audio", { id: "X", className: "clip", src: kick, preload: "auto", crossorigin: true })), /*#__PURE__*/

      React.createElement("label", { id: "closedhh", name: "Q", href: "#", className: "drum-pad", onClick: this.handleClick }, "C", /*#__PURE__*/

      React.createElement("audio", { id: "C", className: "clip", src: closedhh, preload: "auto", crossorigin: true }))), /*#__PURE__*/


      React.createElement("div", { id: "display-container" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, /*#__PURE__*/
      React.createElement("h1", null, this.state.display)))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, null), document.getElementById("drum-machine-container"));
