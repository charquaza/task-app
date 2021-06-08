import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '', 
        id: uniqid()
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '', 
        id: uniqid()
      },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;


//my version
/* 
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
*/