import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {

    return (
      <container className="container-fluid">
        <div className="bg-dark p-5 m-2">
        <h1>Time is Money &amp; Money is Power</h1>

        <div>
        <Link to="/" className="btn btn-link text-light">
          <small >ABOUT</small>
        </Link>
        &#160;<span className="text-info">|</span>&#160;
        <Link to="/" className="btn btn-link text-light">
          <small >DEVELOPERS</small>
        </Link>
        &#160;<span className="text-info">|</span>&#160;
        <Link to="/" className="btn btn-link text-light">
          <small >CREDITS</small>
        </Link>
        &#160;<span className="text-info">|</span>&#160;
        <Link to="/" className="btn btn-link text-light">
          <small >GITHUB</small>
        </Link>
        &#160;<span className="text-info">|</span>&#160;
        <Link to="/" className="btn btn-link text-light">
          <small >PRIVACY</small>
        </Link>
        <br/>
        <small>Copyright &copy; 2018 by TimeBudgetment.com. All Rights Reserved.</small>
        </div>

        </div>

      </container>
    );
  }
}
export default Footer;