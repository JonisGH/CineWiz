import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEye as faBorderedEye } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faBorderStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faBorderHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

type SideBarProps = {
  show?: boolean;
  barPlacement?: "start" | "end" | "top" | "bottom";
};

export default function SideBarComponent(props: SideBarProps) {
  const { show, barPlacement } = props;

  return (
    <>
      <Offcanvas
        backdrop={false}
        scroll={false}
        placement={barPlacement}
        show={show}
        style={{ backgroundColor: "#212529" }}
      >
        <Table striped hover variant="dark">
          <thead>
            <th>
              <FontAwesomeIcon size="xl" icon={faHeart} />
            </th>
          </thead>
          <tbody>
            <tr>
              <td>Shawshank redemption</td>
              <td>
                9.7 &nbsp;&nbsp;
                <FontAwesomeIcon color="gold" icon={faStar} />
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
            </tr>
          </tbody>
        </Table>
        <Table striped hover variant="dark">
          <thead>
            <th>
              <FontAwesomeIcon size="xl" icon={faEye} />
            </th>
          </thead>
          <tbody>
            <tr>
              <td>Shawshank redemption</td>
              <td>
                9.7 &nbsp;&nbsp;
                <FontAwesomeIcon color="gold" icon={faStar} />
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
      </Offcanvas>
    </>
  );
}
