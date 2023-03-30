import React, { useState } from "react";

import Table from "react-bootstrap/Table";

import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardGroup from "react-bootstrap/CardGroup";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Button from "react-bootstrap/Button";

import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEye as faBorderedEye } from "@fortawesome/free-regular-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faBorderStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faBorderHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Container, ToastBody } from "react-bootstrap";

type Props = {};

const TableComponent = (props: Props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <Container>
      <Table striped hover variant="dark" style={{ marginTop: "2rem" }}>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>TMDB Rating</th>
            <th>Your rating</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon width={"100%"} size="xl" icon={faImage} />
            </td>
            <td>Shawshank redemption</td>
            <td>
              9.7 &nbsp;&nbsp;
              <FontAwesomeIcon color="gold" icon={faStar} />
            </td>
            <td>
              <Button variant="outline-light" style={{ border: "none" }}>
                Rate &nbsp;
                <FontAwesomeIcon color="gold" icon={faBorderStar} />
              </Button>
            </td>
            <td>
              <Button
                variant="outline-light"
                size="sm"
                className="w-100"
                onClick={handleShow}
                style={{
                  borderRadius: "360px",
                  border: "none",
                }}
              >
                {show ? (
                  <FontAwesomeIcon size="xl" icon={faHeart} />
                ) : (
                  <FontAwesomeIcon size="xl" icon={faBorderHeart} />
                )}
              </Button>
              <ToastContainer containerPosition="relative">
                <Toast
                  onClose={() => setShow(false)}
                  show={show}
                  delay={1500}
                  autohide
                  style={{
                    background: "transparent",
                    color: "white",
                    fontStyle: "italic",
                  }}
                >
                  added to favorites
                </Toast>
              </ToastContainer>
            </td>
            <td>
              <div>
                <Button
                  variant="outline-light"
                  size="sm"
                  className="w-100"
                  onClick={handleShow}
                  style={{
                    borderRadius: "360px",
                    border: "none",
                  }}
                >
                  {show ? (
                    <FontAwesomeIcon size="xl" icon={faEye} />
                  ) : (
                    <FontAwesomeIcon size="xl" icon={faBorderedEye} />
                  )}
                </Button>
                <ToastContainer containerPosition="relative">
                  <Toast
                    onClose={() => setShow(false)}
                    show={show}
                    delay={1500}
                    autohide
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "white",
                      fontStyle: "italic",
                    }}
                  >
                    added to watchlist
                  </Toast>
                </ToastContainer>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default TableComponent;
