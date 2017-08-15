import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      newTask: "",
      tasks: []
    };
  }

  addTask = task => {
    if (task === "") {
      return;
    }
    let { tasks } = this.state;
    tasks.push({
      id: +new Date(),
      name: task
    });
    this.setState({
      newTask: "",
      tasks: tasks
    });
    this.addToLocalStorage(tasks);
  };

  deleteTask = id => {
    let tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: tasks });
    this.addToLocalStorage(tasks);
  };

  componentWillMount() {
    let tasks = window.localStorage.getItem("tasks");
    if (tasks !== null) {
      tasks = JSON.parse(tasks);
    } else {
      tasks = [];
    }
    this.setState({ tasks: tasks });
  }

  addToLocalStorage = tasks => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    let reorderedArray = arrayMove(this.state.tasks, oldIndex, newIndex);
    this.setState({
      tasks: reorderedArray
    });
    this.addToLocalStorage(reorderedArray);
  };

  render() {
    if (!this.state.login) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
