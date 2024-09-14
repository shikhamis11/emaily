import React, { Component } from "react";  
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import ChatBotRobot from "./Chatbot.compoenent";

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render () {
    return (
        <BrowserRouter>
          <div>
            <ChatBotRobot />
          </div>
          { <div className="container">
            <Header />
            <Route exact path="/" render={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" render={(props) => (<SurveyNew {...props} />)}/>
          </div> }
        </BrowserRouter>
    );
  }
}  

export default connect(null, actions) (App);