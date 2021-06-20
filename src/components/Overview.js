//accept task list props from App.js
//update the DOM list

import React from "react";

const Overview = (props) => {
  const { tasks, deleteTask, editTask } = props;

  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li key={task.id}>
            <div>
              <span>{index + 1}. </span>
              {task.editing
                ? <input type="text" defaultValue={task.text} data-index={index} />
                :task.text
              }
            </div>
            <button onClick={deleteTask} data-index={index}>Delete</button>
            <button onClick={editTask} data-index={index}>Edit</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;


//my version
/* 
function Overview(props) {
    var listJSX = props.items.map(function toJSX(item, index) {
        return (
            <div key={index}>
                {item}
            </div>
        );
    });

    return (
        <div>
            {listJSX}
        </div>
    );
}

export default Overview; 
*/