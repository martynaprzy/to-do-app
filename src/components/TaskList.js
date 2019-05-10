import React from 'react';

const TaskList = props => (
    <ul>
        {
            props.list.map((item, index) => <li className='task' key={index}><h4>task #{index+1}</h4><p>{item}</p></li>)
        }
    </ul>
);

export default TaskList;