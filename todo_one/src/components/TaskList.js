import React from 'react';

const TaskList = (props) => {

  return (
    <div>
      {props.taskList.map((task, index) => {
        return <li>{task.task}</li>
      })}
    </div>
  )
}

export default TaskList;