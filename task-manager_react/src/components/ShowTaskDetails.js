import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';
import axios from 'axios';



class ShowTaskDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    axios
      .get('http://localhost:8082/api/tasks/'+id)
      .then(res => {
        // console.log("Print-showTaskDetails-API-response: " + res.data);
        this.setState({
          task: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowtaskDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/tasks/'+id)
      .then(res => {
        console.log("x+"+id)
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error from ShowtaskDetails_deleteClick");
      })
  };


  render() {

    const task = this.state.task;
    let TaskItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ task.title }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ task.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowTaskDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Task List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Task's Record</h1>
              <p className="lead text-center">
                  View Task's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { TaskItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this, task._id)}>Delete Task</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-task/${task._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Task
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Task</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Task</button> */}

        </div>
      </div>
    );
  }
}

export default (props) => (
    <ShowTaskDetails
        {...props}
        params={useParams()}
    />
);