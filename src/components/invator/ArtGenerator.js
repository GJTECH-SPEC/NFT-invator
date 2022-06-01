import React from "react";
import { Row, Col, OverlayTrigger, Tooltip, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Shuffle from "./Shuffle";

const ArtGenerator = ({ name, ...props }) => {
  return (
    <>
      <Row
        className="ps-4 border-bottom position-fixed border-start"
        id="artnav"
      >
        <Col xs={1}>
          <Link to="ss" className="navs">
            <p className="py-4 navsActive">Design</p>
          </Link>
        </Col>
        <Col xs={1}>
          <Link to="/settings" className="navs">
            <p className="py-4">Metadata</p>
          </Link>
        </Col>
        <Col xs={1} className="navs">
          <Link to="generate" className="navs">
            <p className="py-4">Generate</p>
          </Link>
        </Col>
        <Col xs={6} />
        <Col>
          <div className="py-4">
            <OverlayTrigger
              key="new"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">New</Tooltip>}
            >
              <i
                className="fas fa-plus text-muted px-3"
                style={{ fontSize: "20px" }}
              />
            </OverlayTrigger>
            <OverlayTrigger
              key="duplicate"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Duplicate</Tooltip>}
            >
              <i
                className="far fa-clone text-muted px-3"
                style={{ fontSize: "20px" }}
              />
            </OverlayTrigger>
            <OverlayTrigger
              key="save"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Save</Tooltip>}
            >
              <i
                className="far fa-star text-muted px-3"
                style={{ fontSize: "20px" }}
              />
            </OverlayTrigger>
            <Shuffle key="shuffle" placement="end" name="end" />

            <OverlayTrigger
              key="export"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Export</Tooltip>}
            >
              <i
                className="fas fa-download text-muted ps-3"
                style={{ fontSize: "20px" }}
              />
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
      <Row
        className="border-bottom position-fixed top-25 py-1 border-end"
        style={{
          width: "58.4vw",
          marginBlock: "76px",
          backgroundColor: "#ffffff",
        }}
      ></Row>
      <Container
        style={{
          marginTop: "130px",
          minWidth: "500px",
          maxWidth: "500px",
        }}
      >
        <div
          className="d-flex justify-content-between"
          style={{ width: "500px" }}
        >
          <input
            type="text"
            placeholder="Rename token #1"
            className="d-inline-flex flex-row p-0 border-bottom border-primary border-2"
            style={{ width: "50%" }}
            id="imgname"
          />
          <Link
            to="/settings/output"
            className="btn btn-light d-inline-flex mt-3"
            style={{ flex: "right" }}
          >
            <i className="far fa-image"> Quality</i>
          </Link>
        </div>

        <img
          prop="prop"
          className="mt-3 border shadow-sm "
          style={{ width: "500px", height: "500px", alignSelf: "center" }}
        />
      </Container>
      <Row
        className="py-1 border-top position-fixed bottom-0"
        style={{ width: "58.4vw", backgroundColor: "#ffffff" }}
      ></Row>
    </>
  );
};

export default ArtGenerator;
