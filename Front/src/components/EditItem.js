import React,{Component} from 'react';
import axios from 'axios';


export default class EditItem extends Component{
    constructor(props) {
        super(props);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            item_name: '',
            price: '',
            quantity: '',
            discription: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/inventory/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    item_name: response.data.item_name,
                    price: response.data.price,
                    quantity: response.data.quantity,
                    discription: response.data.discription
                });
                
                })
                .catch(function (error) {
                    console.log(error);
            })
    }

    onChangeItemName(e){
        this.setState({
            item_name: e.target.value
        });
    }

    onChangePrice(e){
        this.setState({
            price: e.target.value
        });
    }

    onChangeQuantity(e){
        this.setState({
            quantity: e.target.value
        });
    }

    onChangeDiscription(e){
        this.setState({
            discription: e.target.value
        });
    }

    
    onSubmit(e){
        e.preventDefault();
        const obj ={
            item_name : this.state.item_name,
            price : this.state.price,
            quantity : this.state.quantity,
            discription : this.state.discription
        };
        axios.post('http://localhost:5000/inventory/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

            this.props.history.push('/additem');
}

render() {
    return(
        <div style={{marginTop: 10}}>
        <h3>Add Item</h3>
        <form onSubmit = {this.onSubmit}>

            <div className="form-group">
                <label>Item Name:</label>
                <input type="text" 
                    className="form-control"
                    value = {this.state.item_name}
                    onChange = {this.onChangeItemName}
                />
            </div>

            <div className="form-group">
                <label>Price:</label>
                <input type="text" 
                    className="form-control"
                    value = {this.state.price}
                    onChange = {this.onChangePrice}    
                />
            </div>

            <div className="form-group">
                <label>Quantity:</label>
                <input type="text-area" 
                    className="form-control"
                    value = {this.state.quantity}
                    onChange = {this.onChangeQuantity}
                />
            </div>

            <div className="form-group">
                <label>Discription:</label>
                <input type="text" 
                    className="form-control"
                    value = {this.state.discription}
                    onChange = {this.onChangeDiscription}   
                />
            </div>
            
            <div className="form-group">
                <input type="submit" value="update Item" className="btn btn-primary"></input>
            </div>
        </form>
    </div> 
    )
}

}

