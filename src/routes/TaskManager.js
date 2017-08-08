import React, { Component } from 'react';
import TaskList from '../components/TaskList';

export default class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ''
    };
  }
  handleChange = (e) => {
    this.setState({ newTask: e.target.value })
  };
  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
                </p>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.addTask(this.state.newTask);
        }} className="form">
          <input type="text" name="task-name" className="input" value={this.state.newTask} onChange={this.handleChange} placeholder="Add new ticket" autoFocus />
          <button type="submit" className="add" />
        </form>
        <TaskList items={this.state.tasks} onSortEnd={this.onSortEnd} deleteTask={this.deleteTask} />
      </div>
    );
  }
}