import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

// icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import { faStar as starFilled } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartFilled } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartOutlined } from "@fortawesome/free-regular-svg-icons";
import { faEye as eyeFilled } from "@fortawesome/free-solid-svg-icons";
import { faEye as eyeOutlined } from "@fortawesome/free-regular-svg-icons";

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
        scroll
        placement={barPlacement}
        show={show}
        style={{ backgroundColor: "#212529", top: "3rem" }}
      >
        <Table striped hover variant="dark">
          <thead>
            <th>
              <div className="d-flex gap-3">
                <FontAwesomeIcon size="xl" icon={heartOutlined} />
                <small>Favorites</small>
              </div>
            </th>
          </thead>
          <tbody>
            <tr>
              <td>Shawshank redemption</td>
              <td>
                9.7 &nbsp;&nbsp;
                <FontAwesomeIcon color="gold" icon={starFilled} />
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
                  <FontAwesomeIcon size="xl" icon={heartFilled} />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table striped hover variant="dark">
          <thead>
            <th>
              <div className="d-flex gap-3">
                <FontAwesomeIcon size="xl" icon={eyeOutlined} />
                <small>Watchlist</small>
              </div>
            </th>
          </thead>
          <tbody>
            <tr>
              <td>Shawshank redemption</td>
              <td>
                9.7 &nbsp;&nbsp;
                <FontAwesomeIcon color="gold" icon={starFilled} />
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
                  <FontAwesomeIcon size="xl" icon={eyeFilled} />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Offcanvas>
    </>
  );
}
