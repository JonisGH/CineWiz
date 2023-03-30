import React from "react";

import Table from "react-bootstrap/Table";

import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardGroup from "react-bootstrap/CardGroup";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEye as faBorderedEye } from "@fortawesome/free-regular-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faBorderStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faBorderHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

type Props = {};

const TableComponent = (props: Props) => {
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
                style={{
                  border: "none",
                }}
              >
                <FontAwesomeIcon size="xl" icon={faBorderHeart} />
              </Button>
            </td>
            <td>
              <Button
                variant="outline-light"
                size="sm"
                className="w-100"
                style={{
                  border: "none",
                }}
              >
                <FontAwesomeIcon size="xl" icon={faBorderedEye} />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default TableComponent;
