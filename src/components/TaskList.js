import React from 'react';

const TaskList = props => (
    <ul>
        {
            props.list.map((item, index) => <li className='task' key={index}><h3>Task number #{index+1}</h3><p>{item}</p></li>)
        }
    </ul>
);

export default TaskList;