import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

//components
///Authentication
import Signup from "./components/Authentication/Register";
import LoginForm from "./components/Authentication/Login";
///Layout
import Home from "./components/Layout/Base";
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Sitebar";
import Footer from "./components/Layout/Footer";
///Customepage
import About from "./components/Custompage/About";
import Contact from "./components/Custompage/Contact";
///Projects
import Projects from "./components/Projects/Projects";
///Dashboard
import Dashboard from "./components/Dashboard/Dashboard";
///Widgets
import ChangeInput from "./components/Widgets/ChangeInput";

class App extends Component {
    //constructor
    constructor() {
        super();
        this.state = { user: null };
    
        this.componentDidMount = this.componentDidMount.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }
    //get the user and assign to state
    async componentDidMount() {
        try {
          const response = await axios.get("/user/");
          //console.log("Get user response: ", response.data);
          this.setState({ user: response.data.user });
        } catch (err) {
          //console.log("something went wrong", err);
        }
    }
    //update
    updateUser(userObject) {
        this.setState(userObject);
    }
    ///render
    render(){
        //console.log("the state = ", this.state);
        return(
            <div className="App container">
                <Header />
                <Navbar updateUser={this.updateUser} user={this.state.user}/>
                {this.state.user && (
                    <small className="py-3">Welcome to Time Budgetment, <span className="text-uppercase text-danger">{this.state.user.username}</span></small>
                )}
                <div className="container-fluid">
                    <div className="row">
                        
                        <Route exact path="/" component={Home} />
                        <Route
                            path="/login"
                            render={() => <LoginForm updateUser={this.updateUser} />}
                            />
                            <Route
                            path="/signup"
                            render={() => <Signup updateUser={this.updateUser} />}
                        />
                        <Route path="/about" render={() => <About />} />
                        <Route path="/contact" render={() => <Contact />} />
                        <Route
                            path="/projects"
                            render={() => <Projects user={this.state.user} />}
                        />
                        <Route path="/dashboard" rander={Dashboard} />
                        <Route path="/changeInputs" render={() => <ChangeInput />} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


export default App;