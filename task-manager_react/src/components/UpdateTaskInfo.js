import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateTaskInfo extends Component {
    constructor (props){
        super(props);
        this.state = {
            title: " ",
            desciption: " "
        };
    }

    componentDidMount(){
        const { id } = this.props.params;
        axios
            .get('http://localhost:8082/api/tasks/'+id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    description: res.data.description
                })
            })
            .catch(err => {
                console.log("Error in UpdateTaskInfo");
            })
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const { id } = this.props.params;


        const data = {
            title: this.state.title,
            description: this.state.description
        }
        
        axios
            .put('http://localhost:8082/api/tasks/'+id, data)
            .then(res => {
                this.props.history.push('/show-book/'+id);
            })
            .catch(err => {
                console.log("Error in UpdateTaskInfo");
            })

        // axios
        //     .put('http://localhost:8082/api/tasks/' + id, data)
        //     .then(res => {
        //         this.props.history.push('/show-task/' + id);
        //     })
        //     .catch(err => {
        //         console.log("Error in UpdateTaskInfo.");
        //     })
    };

    render() {
        return(
            <div className='UpdateTaskInfor'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Task List
                            </Link>
                        </div>
                        <div className='col-md-8 m-auto'>
                            <h1 className='display-4 text-center'>Edit Task</h1>
                            <p className='lead text-center'>
                                Update Task's Info
                            </p>
                        </div>
                    </div>

                    <div className='col-md-8 m-auto'>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <label htmlFor='title'>Title</label>
                                <input 
                                    type='text'
                                    placeholder='Title of the task'
                                    name='title'
                                    className='form-control'
                                    value={this.state.title}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <label htmlFor='description'>Description</label>
                                <input 
                                    type='text'
                                    placeholder='Description of the task'
                                    name='description'
                                    className='form-control'
                                    value={this.state.description}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Task</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default (props) => (
    <UpdateTaskInfo
        {...props}
        params={useParams()}
    />
);


