import React, {Component} from 'react';
import {SortableElement} from 'react-sortable-hoc';
import Timer from './Timer';


const style = {
	backgroundColor: '#ccc',
	border: 'solid 1px black',
	marginTop: '10px'
}
const SortableTask = SortableElement(({task,deleteTask}) => 
	<Task task={task} deleteTask={deleteTask}/>
);

class Task extends Component {
	constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
	}
	
	handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };
	render() {
		let {task, deleteTask} = this.props; 
		return (
			<div className="task" style={style}>
				<div className="task-header">
					<span>{task.name}</span>
					<button onClick={(e) => {deleteTask(task.id)}}>Delete task</button>
				</div>
				<div className="task-timers">
					<Timer />
				</div>
			</div>
		);
	}
}

export default SortableTask;