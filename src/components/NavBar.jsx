import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

class NavBar extends Component {
  render() {
    return (
      <Navbar className="align-items-center blueNav m-auto">
        <Navbar.Brand onClick={() => this.props.history.push("/")}>
          <img
            src="https://res.cloudinary.com/dhmw620tl/image/upload/v1611828821/benchmark3/k8cvl0kfh3bo1wul6nen.gif"
            className={
              this.props.jobSearch.loading
                ? "navbarIcon mr-2 speen"
                : "navbarIcon mr-2"
            }
            alt="icon"
          />
        </Navbar.Brand>
        <h3 className="logoTitle ">Bluesuit Jobs</h3>
        <Button
          className="favNav  ml-auto"
          onClick={(e) => {
            e.preventDefault();
            this.props.history.push("/fav/");
          }}
        >
          Favourites
        </Button>
      </Navbar>
    );
  }
}

export default withRouter(connect(mapStateToProps)(NavBar));
