import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import ItemList from './components/ItemList'
import AddItem from './components/AddItem'
import EditItem from './components/EditItem'
import ItemCard from './components/ItemCard'

 class App extends Component{
   render() {
     return(
      <Router>
      <div className="App">
       <Navbar/>
       <Route exact path="/" component={Landing}/>
       <div className="container">
        <Route exact path = "/register" component={Register}/>
        <Route exact path = "/login" component={Login}/>
        <Route exact path = "/profile" component={Profile}/>
        <Route exact path = "/additem" component={AddItem}/>
        <Route exact path = "/itemlist" component={ItemList}/>
        <Route exact path = "/edit/:id" component={EditItem}/>
        <Route exact path = "/itemcard/:id" component={ItemCard}/>
       </div>
      </div>
    </Router>
     )
   }
 }


export default App;
