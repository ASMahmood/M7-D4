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
    return { __html: this.props.jobSearch.selectedJob.description };
  };
  htmlApply = () => {
    return { __html: this.props.jobSearch.selectedJob.how_to_apply };
  };

  render() {
    return this.props.jobSearch.selectedJob ? (
      <>
        <Row className="homepage2">
          <Col xs={12}>
            {console.log(this.props)}
            <h1 className="jobTitle">
              {this.props.jobSearch.selectedJob.title}
            </h1>
          </Col>
          <Col xs={12}>
            <h4 className="d-flex align-items-center">
              {this.props.jobSearch.selectedJob.location},{" "}
              {this.props.jobSearch.selectedJob.type}{" "}
              {this.props.favouriteJobList.find(
                (job) => job.id === this.props.jobSearch.selectedJob.id
              ) ? (
                <span
                  onClick={() =>
                    this.props.unFavouriteJob(
                      this.props.jobSearch.selectedJob.id
                    )
                  }
                >
                  <AiFillStar className="ml-2" s fill="#4a82b9" />
                </span>
              ) : (
                <span
                  onClick={() =>
                    this.props.favouriteJob(this.props.jobSearch.selectedJob)
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
