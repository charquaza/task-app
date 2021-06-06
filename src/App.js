import React from "react";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputList: []
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    var inputElem = document.querySelector("input");
    var inputValue = inputElem.value;

    var newInputList = [...this.state.inputList, inputValue];
    
    this.setState(
      {
        inputList: newInputList
      }
    );

    inputElem.value = "";
  }

  render() {
    return (
      <div className="App">
        <input type="text" />
        <button onClick={this.onClick}>Submit</button>

        <Overview items={this.state.inputList} /> 
      </div>
    );
  }
}

export default App;