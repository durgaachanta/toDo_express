import React from 'react';
import '../styles/filter.css';

class TaskListFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <button className={this.props.all} id='all' onClick={(event) => { this.props.onClickEvent(event) }}>All</button>
        <button className={this.props.active} id='active' onClick={(event) => { this.props.onClickEvent(event) }}>Active</button>
        <button className={this.props.completed} id='completed' onClick={(event) => { this.props.onClickEvent(event) }}>Completed</button>
      </div>
    )
  }
}

export default TaskListFilter;
