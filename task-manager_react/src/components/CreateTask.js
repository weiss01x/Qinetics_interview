import React, {Component} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class CreateTask extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
        };
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    
    onSubmit = e => {
        const navigation = useNavigate();

        e.preventDefault();
    
        const data = {
            title: this.state.title,
            description: this.state.description
        };
    
        axios
            .post('http://localhost:8082/api/tasks', data)
            .then(res => {
                this.setState({
                    title:'',
                    description:''
                })
                console.log("x");
                navigation.navigate('/', { replace: true })
                //navigate("/", { replace: true });
                //this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error in CreateTask.");
            })
    };
    
    render() {
        return(
            <div className='CreateTask'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <br />
                            <Link to="/" className='btn btn-outline-warning float-left'>
                                Show Task List
                            </Link>
                        </div>
    
                        <div className='col-md-8 m-auto'>
                            <h1 className='display-4 text-center'>Add Task</h1>
                            <p className='lead text-center'>Create new task</p>
    
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input 
                                        type='text'
                                        placeholder='Title of the task'
                                        name='title'
                                        className='form-control'
                                        value={this.state.title}
                                        onChange = {this.onChange}
                                    />
                                </div>
                                <br />
                                <div className='form-group'>
                                <input 
                                        type='text'
                                        placeholder='Description of the task'
                                        name='description'
                                        className='form-control'
                                        value={this.state.description}
                                        onChange = {this.onChange}
                                    />
                                </div>
    
                                <input
                                    type='submit'
                                    className='btn btn-outline-warning btn-blovk mt-4'
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateTask;
