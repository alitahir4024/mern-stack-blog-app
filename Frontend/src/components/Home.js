import { Container, Row, Col, Card, CardImg } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaGithubAlt, FaSlack } from "react-icons/fa";
import blogImg1 from "./img/blog-1-img.jpg";
import blogImg2 from "./img/blog-2-img.jpg";
import blogImg3 from "./img/blog-3-img.jpg";
import blogImg4 from "./img/blog-4-img.jpg";
import blogImg5 from "./img/blog-5-img.jpg";
import blogImg6 from "./img/blog-6-img.jpg";
import blogImg7 from "./img/blog-7-img.jpg";
import blogImg8 from "./img/blog-8-img.jpg";
import blogImg9 from "./img/blog-9-img.jpg";
import blogImg10 from "./img/blog-10-img.jpg";
import blogImg11 from "./img/blog-11-img.jpg";
import blogImg12 from "./img/blog-12-img.jpg";
import blogImg13 from "./img/blog-13-img.jpg";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row className="py-5">
          <Col xs={12} md={6} lg={4} className="py-3">
            <div
              style={{ backgroundImage: `url(${blogImg1})` }}
              className="fresh-blogs"
            >
              <div className="blog-text">
                <ul style={{ listStyle: "none" }}>
                  <li className="social-icon">
                    <FaFacebookF />
                  </li>
                  <li className="social-icon">
                    <FaTwitter />
                  </li>
                  <li className="social-icon">
                    <FaGithubAlt />
                  </li>
                  <li className="social-icon">
                    <FaSlack />
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="py-3">
            <div
              style={{ backgroundImage: `url(${blogImg2})` }}
              className="fresh-blogs"
            >
              <div className="blog-text">
                <ul style={{ listStyle: "none" }}>
                  <li className="social-icon">
                    <FaFacebookF />
                  </li>
                  <li className="social-icon">
                    <FaTwitter />
                  </li>
                  <li className="social-icon">
                    <FaGithubAlt />
                  </li>
                  <li className="social-icon">
                    <FaSlack />
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="py-3">
            <div
              style={{ backgroundImage: `url(${blogImg3})` }}
              className="fresh-blogs"
            >
              <div className="blog-text">
                <ul style={{ listStyle: "none" }}>
                  <li className="social-icon">
                    <FaFacebookF />
                  </li>
                  <li className="social-icon">
                    <FaTwitter />
                  </li>
                  <li className="social-icon">
                    <FaGithubAlt />
                  </li>
                  <li className="social-icon">
                    <FaSlack />
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="py-3">
            <div
              style={{ backgroundImage: `url(${blogImg4})` }}
              className="fresh-blogs"
            >
              <div className="blog-text">
                <ul style={{ listStyle: "none" }}>
                  <li className="social-icon">
                    <FaFacebookF />
                  </li>
                  <li className="social-icon">
                    <FaTwitter />
                  </li>
                  <li className="social-icon">
                    <FaGithubAlt />
                  </li>
                  <li className="social-icon">
                    <FaSlack />
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="py-3">
            <div
              style={{ backgroundImage: `url(${blogImg5})` }}
              className="fresh-blogs"
            >
              <div className="blog-text">
                <ul style={{ listStyle: "none" }}>
                  <li className="social-icon">
                    <FaFacebookF />
                  </li>
                  <li className="social-icon">
                    <FaTwitter />
                  </li>
                  <li className="social-icon">
                    <FaGithubAlt />
                  </li>
                  <li className="social-icon">
                    <FaSlack />
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="py-3">
            <div
              style={{ backgroundImage: `url(${blogImg6})` }}
              className="fresh-blogs"
            >
              <div className="blog-text">
                <ul style={{ listStyle: "none" }}>
                  <li className="social-icon">
                    <FaFacebookF />
                  </li>
                  <li className="social-icon">
                    <FaTwitter />
                  </li>
                  <li className="social-icon">
                    <FaGithubAlt />
                  </li>
                  <li className="social-icon">
                    <FaSlack />
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={3} className="py-3">
            <Card className="blog-card">
              <CardImg variant="top" src={blogImg7} />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card.Body>
            </Card>{" "}
          </Col>
          <Col xs={12} md={6} lg={3} className="py-3">
            <Card className="blog-card">
              <CardImg variant="top" src={blogImg8} />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card.Body>
            </Card>{" "}
          </Col>
          <Col xs={12} md={6} lg={3} className="py-3">
            <Card className="blog-card">
              <CardImg variant="top" src={blogImg9} />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card.Body>
            </Card>{" "}
          </Col>
          <Col xs={12} md={6} lg={3} className="py-3">
            <Card className="blog-card">
              <CardImg variant="top" src={blogImg10} />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card.Body>
            </Card>{" "}
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={3} className="py-3">
            <Card className="blog-card">
              <CardImg variant="top" src={blogImg11} />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card.Body>
            </Card>{" "}
          </Col>
          <Col xs={12} md={6} lg={3} className="py-3">
            <Card className="blog-card">
              <CardImg variant="top" src={blogImg12} />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card.Body>
            </Card>{" "}
          </Col>
          <Col xs={12} md={6} lg={3} className="py-3">
            <Card className="blog-card">
              <CardImg variant="top" src={blogImg2} />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card.Body>
            </Card>{" "}
          </Col>
          <Col xs={12} md={6} lg={3} className="py-3">
            <Card className="blog-card">
              <CardImg variant="top" src={blogImg13} />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card.Body>
            </Card>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
