import React from 'react';

class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }
  handleChange = (e) => {

    this.setState({ userInput: e.target.value });
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.updateList(this.state.userInput);
    this.setState({ userInput: '' });
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" onChange={this.handleChange} value={this.state.userInput} />
      </form >
    );

  }
};

export default TaskInput;