import React, { Component } from "react";


export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeDiscription = this.onChangeDiscription.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      item_name: "",
      price: "",
      quantity: "",
      discription: "",
      itemimg: "",
    };
  }

  onChangeItemName(e) {
    this.setState({
      item_name: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  onChangeDiscription(e) {
    this.setState({
      discription: e.target.value,
    });
  }

  onFileChange(e) {
    this.setState({
      itemimg: e.target.files[0],
    });
  }

  onSubmit(e) {
    e.preventDefault();

    let formData = new FormData();

    formData.append("item_name", this.state.item_name);
    formData.append("price", this.state.price);
    formData.append("quantity", this.state.quantity);
    formData.append("discription", this.state.discription);
    formData.append("image", this.state.itemimg);

    fetch("http://localhost:5000/inventory/add", {
      method: "POST",

      body: formData,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

      this.setState({
        item_name : '',
        price : '',
        quantity : '',
        discription : ''
    })

  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add Item</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Item Name:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.item_name}
              onChange={this.onChangeItemName}
            />
          </div>

          <div className="form-group">
            <label>Price:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}
            />
          </div>

          <div className="form-group">
            <label>Quantity:</label>
            <input
              type="text-area"
              className="form-control"
              value={this.state.quantity}
              onChange={this.onChangeQuantity}
            />
          </div>

          <div className="form-group">
            <label>Discription:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.discription}
              onChange={this.onChangeDiscription}
            />
          </div>

          <div className="form-group">
            <label>Add Image:</label>
            <input
              type="file"
              className="form-control"
              onChange={this.onFileChange}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Add Item
            </button>
          </div>
        </form>
      </div>
    );
  }
}
