import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {

    return (
      <container className="container-fluid">
        <div className="bg-dark p-5 m-1">
        <h1 className="m-3 p-3">Time is Money. <span className="wordwrap">Money is Power.</span></h1>

        <div>
        <Link to="/">
          <small className="btn btn-link text-light smFont">ABOUT</small>
        </Link>
        {/* &#160;<span className="text-info">|</span>&#160; */}
        <Link to="/">
          <small className="btn btn-link text-light smFont" >DEVELOPERS</small>
        </Link>
        {/* &#160;<span className="text-info">|</span>&#160; */}
        <Link to="/">
          <small className="btn btn-link text-light smFont" >CREDITS</small>
        </Link>
        {/* &#160;<span className="text-info">|</span>&#160; */}
        <Link to="/">
          <small className="btn btn-link text-light smFont" >GITHUB</small>
        </Link>
        {/* &#160;<span className="text-info">|</span>&#160; */}
        <Link to="/">
          <small className="btn btn-link text-light smFont" >PRIVACY</small>
        </Link>
        <br/>
        <small className="smFont">Copyright &copy; 2018 by TimeBudgetment.com. All Rights Reserved.</small>
        </div>

        </div>

      </container>
    );
  }
}
export default Footer;