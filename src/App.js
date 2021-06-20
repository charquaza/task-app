import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '', 
        id: uniqid(),
        editing: false
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        editing: false
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '', 
        id: uniqid(),
        editing: false
      },
    });
  };

  deleteTask = (e) => {
    var index = Number(e.target.getAttribute("data-index"));

    this.setState((state) => {
      var firstHalf = state.tasks.slice(0, index);
      var secondHalf = state.tasks.slice(index + 1);

      return {tasks: firstHalf.concat(secondHalf)};
    });
  };

  editTask = (e) => {
    var btn = e.target;
    var currIndex = Number(btn.getAttribute("data-index"));
    var currTask = this.state.tasks[currIndex];

    if (currTask.editing) {
      let newInputElem = document.querySelector(`input[data-index="${currIndex}"]`);
      let newTaskText = newInputElem.value;

      this.setState((state) => {
        var newTasks = state.tasks.slice();
        newTasks[currIndex].text = newTaskText;
        newTasks[currIndex].editing = false;
  
        return {tasks: newTasks};
      });

      btn.textContent = "Edit";
    } else {
      this.setState((state) => {
        var newTasks = state.tasks.slice();
        newTasks[currIndex].editing = true;
  
        return {tasks: newTasks};
      });
  
      btn.textContent = "Resubmit";
    }
  }

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
        <Overview tasks={tasks} deleteTask={this.deleteTask} editTask={this.editTask} />
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