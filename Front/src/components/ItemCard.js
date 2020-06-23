import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

export default class ItemCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item_name: "",
      price: "",
      quantity: "",
      discription: "",
      image: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/inventory/itemcard/" + this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          item_name: response.data.item_name,
          price: response.data.price,
          quantity: response.data.quantity,
          discription: response.data.discription,
          image: response.data.image,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`http://localhost:5000/${this.state.image}`}
        />
        <Card.Body>
          <Card.Title>
            <h1>{`${this.state.item_name}`}</h1>
          </Card.Title>
          <Card.Title>
            <h2>{`$.${this.state.price}`}</h2>
          </Card.Title>
          <Card.Text><p>{`${this.state.discription}`}</p></Card.Text>
        </Card.Body>
      </Card>
      </div> 
    );
  }
}
