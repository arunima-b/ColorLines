import React from "react";
import ReactDOM from "react-dom";
import GetRandomColor from "./CssColors.js";

const styles = {
  center: {
    textAlign: 'center',
  },
  border: {
    border: '1px solid black',
  },
};
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const drawLines = (canvas, numLines) => {
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let line = 0; line < numLines; line++) {
    let y1 = getRandomInteger(0, 300);
    let y2 = getRandomInteger(0, 300);
    //let color = GetRandomColor();
    ctx.beginPath();
    ctx.moveTo(0, y1);
    ctx.lineTo(300, y2);
    let color = GetRandomColor();
    ctx.strokeStyle = color;
    ctx.stroke();
  }
};

export default class App extends React.Component {
  state = { numLines: 0 };
  componentDidMount(){
    this.drawLines();
  
  }
  drawLines(){
    let numLines = getRandomInteger(10,100);
    drawLines(this.refs.canvas, numLines);
    this.setState({numLines});
}
  onClick = () => this.drawLines();
  render() {
    return (
        <div>
          <div style={{...styles.center, ...styles.border}}>
            <canvas ref="canvas" width={300} height={300} />
          </div>
          <div style={styles.center}>
          {this.state.numLines}
        </div>
        <div style={styles.center}>
        <button onClick={this.onClick.bind(this)}>
            Refresh
            </button>
            </div>
            </div>
     
      );
      
  }
}

// Start the React rendering process
ReactDOM.render(
  React.createElement(App, {}),
  document.getElementById("root")
);
