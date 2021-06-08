//accept task list props from App.js
//update the DOM list

import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text}</li>;
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