import React from "react";
import Card from "react-bootstrap/esm/Card";
import { Container, Button } from "react-bootstrap/esm/index";

// icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import {
  faStar as starFilled,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons/index";

import { useLocation } from "react-router";

function DetailsPage(): React.ReactElement {
  const { state } = useLocation();

  return (
    <Container
      style={{
        textAlign: "center",
        paddingTop: "6rem",
        margin: "auto",
      }}
    >
      <Card border="secondary" bg="dark" text="white">
        <>
          <Card.Header>
            <div className="mt-4 mb-4">
              <Button
                role="button"
                variant="outline-light"
                href="/"
                style={{
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <small style={{ color: "GrayText" }}>TMDB rating</small>
              &nbsp; &nbsp;
              {state.vote_average}&nbsp;
              <FontAwesomeIcon color="gold" icon={starFilled} />
            </div>
          </Card.Header>
          <Card.Body>
            <br />
            <Card.Img
              variant="bottom"
              src={"https://image.tmdb.org/t/p/w200" + state.poster_path}
              style={{ maxWidth: "8rem", maxHeight: "10rem" }}
            />
            <br />
            <br />
            <Card.Title>
              <div>
                <p>{state.title}</p>
                <small style={{ color: "GrayText" }}>
                  {" (" + state.release_date + ")"}
                </small>
              </div>
            </Card.Title>
            <br />
            <Card.Text>{state.overview}</Card.Text>
          </Card.Body>
          <br />
          <Card.Footer>
            {" "}
            <Button
              role="button"
              variant="outline-light"
              href="/"
              style={{
                border: "none",
                fontWeight: "bold",
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
              <FontAwesomeIcon icon={faChevronLeft} />
              &nbsp; Go back
            </Button>
          </Card.Footer>
        </>
      </Card>
    </Container>
  );
}

export default DetailsPage;
