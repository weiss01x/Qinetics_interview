import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TaskCard = (props) => {
    const task = props.task;

    return(
        <div className='card-container'>
            <Link to={`/show-task/${task._id}`}>
                <img src="https://acadianakarate.com/wp-content/uploads/2017/04/default-image.jpg" alt="" />
            </Link>
            <div className='desc'>
                <h2>
                <Link to={`/show-task/${task._id}`}>
                        { task.title }
                </Link>
                </h2>
                <p>{task.description}</p>
            </div>
        </div>
    )
};

export default TaskCard;
