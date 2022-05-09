import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TaskCard from './TaskCard';

class ShowTaskList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: []
        };
    }

    componentDidMount(){
        axios
            .get('http://localhost:8082/api/tasks')
            .then(res=> {
                this.setState({
                    tasks: res.data
                })
            }).catch(err => {
                console.log('Error in ShowTaskList');
            })
    };

    render(){
        const tasks = this.state.tasks;
        console.log("Output tasks: " + tasks);
        let taskList;

        if(!tasks){
            taskList = "No task record.";
        }
        else{
            //map the tasks into card
            taskList = tasks.map((task, k) => 
                <TaskCard task={task} key={k} />
            );
        }

        //UI
        return(
            <div className='ShowTaskList'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <br />
                            <h2 className='display-4 text-center'>Task List</h2>
                        </div>

                        <div className='col-md-11'>
                            <Link to='/create-task'  className='btn btn-outline-warning float-right'>
                                + Add New Task
                            </Link>
                            <br />
                            <br />
                            <hr />
                        </div>
                    </div>

                    <div className='list'>
                        {taskList}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowTaskList;
