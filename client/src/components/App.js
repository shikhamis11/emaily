import React, { Component } from "react";  
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render () {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" render={Landing} />
            <Route exact path="/surveys" render={() => <h2>Dashboard</h2>} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}  

export default connect(null, actions) (App);