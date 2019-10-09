import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './Home';
import Posts from './Posts';
import Profile from './Profile'
import PostDetails from './PostDetail'

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
            <header>
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand" href="#">WebSiteName</a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/profile">Profile</Link>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
              </div>
            </div>
          </nav>
            </header>
                <Route exact path="/" component={Home}></Route>
                <Route path="/posts" component={Posts}></Route>
                <Route path="/posts/:subject" component={PostDetails}></Route>
                <Route path="/profile" component={Profile}></Route>
            </div>
            </BrowserRouter>
        )
    }
}
export default Routing;