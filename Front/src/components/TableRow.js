import React, { Component } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .get("http://localhost:5000/inventory/delete/" + this.props.obj._id)
      .then(console.log("Deleted"))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.item_name}</td>
        <td>{this.props.obj.price}</td>
        <td>{this.props.obj.quantity}</td>

        <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">
            Edit
          </Link>
        </td>

        <td>
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>

        <td>
          <Link
            to={"/itemcard/" + this.props.obj._id}
            className="btn btn-primary"
          >
            View more
          </Link>
        </td>
      </tr>
    );
  }
}

export default TableRow;
