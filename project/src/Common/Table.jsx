import React, { Component } from 'react'


export default class Table extends Component {
  render() {
    return (
        <table class="table">
        <thead>
          <tr>
            <th scope="col">UserId</th>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            {/* <th scope="col">DateOfBirth</th> */}
            <th/>
            <th/>
          </tr>
        </thead>
        <tbody>
          
            {this.props.Data.map((item) => (
              <tr key={item.id}>
                {/* <td>{index + 1}</td> */}
                <td>{item.userId}</td>
                {/* <td>{item.id}</td> */}
                <td>{item.title}</td>
                <td>{item.body}</td>
                {/* <td>{item.Salary}</td> */}
                {/* <td>{item.DateOfBirth}</td> */}
                <td>
                  <button
                   className="btn btn-danger btn-sm" 
                   onClick={() => this.props.onDelete(item)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => this.props.onEdit(item)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        
        </tbody>
      </table>
    )
  }
}
