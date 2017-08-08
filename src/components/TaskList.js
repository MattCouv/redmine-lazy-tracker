import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import Task from './Task';


const TaskList = SortableContainer(({items,deleteTask}) => {
  return (
    <div>
      {items.map((value, index) => (
        <Task key={index} task={value} index={index} deleteTask={deleteTask}/>
      ))}
    </div>
  );
});

export default TaskList;