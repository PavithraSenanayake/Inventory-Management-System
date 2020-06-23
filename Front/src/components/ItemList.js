import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class ViewStudent extends Component {
  constructor(props) {
    super(props);
    this.state = { inventory: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/inventory")
      .then((response) => {
        this.setState({ inventory: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.inventory.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Item List</h3>
        <table className="table table-striped" style={{ margineTop: 20 }}>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price per unit</th>
              <th>Quantity</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>

          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
