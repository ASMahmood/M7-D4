import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  favouriteJob: (job) =>
    dispatch({
      type: "ADD_TO_FAVOURITES",
      payload: job,
    }),
  unFavouriteJob: (id) =>
    dispatch({
      type: "REMOVE_FROM_FAVOURITES",
      payload: id,
    }),
});

class DetailPage extends Component {
  htmlDesc = () => {
    return { __html: this.props.selectedJob.description };
  };
  htmlApply = () => {
    return { __html: this.props.selectedJob.how_to_apply };
  };

  render() {
    return this.props.selectedJob ? (
      <>
        <Row className="homepage2">
          <Col xs={12}>
            <h1 className="jobTitle">{this.props.selectedJob.title}</h1>
          </Col>
          <Col xs={12}>
            <h4 className="d-flex align-items-center">
              {this.props.selectedJob.location}, {this.props.selectedJob.type}{" "}
              {this.props.favouriteJobList.find(
                (job) => job.id === this.props.selectedJob.id
              ) ? (
                <span
                  onClick={() =>
                    this.props.unFavouriteJob(this.props.selectedJob.id)
                  }
                >
                  <AiFillStar className="ml-2" s fill="#4a82b9" />
                </span>
              ) : (
                <span
                  onClick={() =>
                    this.props.favouriteJob(this.props.selectedJob)
                  }
                >
                  <AiOutlineStar
                    className="ml-2"
                    tyle={{ cursor: "pointer" }}
                    fill="#4a82b9"
                  />
                </span>
              )}
            </h4>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col xs={12}>
            <div dangerouslySetInnerHTML={this.htmlDesc()} />
          </Col>
        </Row>
        <Row className="bg-colour-change2 ">
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <h4>{this.props.selectedJob.company}</h4>
          </Col>
        </Row>
      </>
    ) : (
      <Row className="homepage2">
        <Col xs={12}>
          <h1 className="jobTitle">Please select a job!</h1>
        </Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
