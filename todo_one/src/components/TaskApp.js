import React from 'react';
import axios from 'axios';
import Header from './Header';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskListFilter from './TaskListFilter';

class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      filteredList: [],
      btnall: "",
      btnactive: "",
      btncompleted: "",
    };
  };
  componentDidMount() {
    console.log("this is component did mount");
    //get call to fetch data 
    axios.get('/listItems')
      .then((response) => {
        this.setState({ list: response.data.payload });
      })
      .catch((error) => {
        console.log(error);
      })

  }
  updateList = (data) => {
    //post data to the listItem
    axios.post('/putItems', {
      task: data,
      status: 'active',
    })
      .then((response) => {
        console.log(response);
        this.setState({ list: response.data.payload })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  filterTasks = (event) => {
    console.log(event.target.id);
    if (event.target.id === 'all') {
      this.setState({ filteredList: this.state.list, btnall: 'btnselected', btnactive: '', btncompleted: '' });


    } else {
      let testArr = this.state.list.filter(list => list.status === `${event.target.id}`);
      this.setState({ filteredList: testArr });
      if (event.target.id === 'active') {
        this.setState({ btnactive: 'btnselected', btnall: '', btncompleted: '' });
      }
      else {
        this.setState({ btncompleted: 'btnselected', btnactive: '', btnall: '' });
      }
    }
  }


  render() {
    return (
      <div>
        <Header />
        <TaskInput updateList={this.updateList} />
        <TaskList taskList={this.state.filteredList.length === 0 ? this.state.list : this.state.filteredList} />
        <TaskListFilter
          taskList={this.state.list}
          onClickEvent={this.filterTasks}
          completed={this.state.btncompleted}
          active={this.state.btnactive}
          all={this.state.btnall} />
      </div>
    )
  }

}

export default TaskApp;