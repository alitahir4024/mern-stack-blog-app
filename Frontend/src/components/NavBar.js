import {
  Navbar,
  NavbarBrand,
  Nav,
  Badge,
  ModalBody,
  ModalTitle,
  ModalFooter,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import axios from "axios";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const [userEmailAddress, setUserEmailAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [openSignOutModal, setOpenSignOutModal] = useState(false);

  const handleOpenSignUpModal = () => {
    if (localStorage.getItem("userPersonalData")) {
      setOpenSignOutModal(true);
    } else {
      setOpenSignUpModal(true);
    }
  };

  const handleCloseSignUpModal = () => {
    setOpenSignUpModal(false);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleUserEmailAddress = (e) => {
    setUserEmailAddress(e.target.value);
  };

  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleUserSignUp = async () => {
    await axios
      .post("http://localhost:9999/api/signup", {
        username,
        userEmailAddress,
        userPassword,
      })
      .then((res) => {
        if (res.data === "Sign In Successful") {
          handleCloseSignUpModal();
          handleOpenLoginModal();
        } else {
          alert(res.data);
        }
      });
    setUsername("");
    setUserEmailAddress("");
    setUserPassword("");
  };

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const userLogin = async () => {
    await axios
      .post("http://localhost:9999/api/login", {
        userEmailAddress,
        userPassword,
      })
      .then((res) => {
        if (res.data === "Login unsuccessful") {
          alert(res.data);
        } else {
          alert("Login Successful");
          localStorage.setItem("userPersonalData", JSON.stringify(res.data));
          handleCloseLoginModal();
        }
      });
    setUserEmailAddress("");
    setUserEmailAddress("");
  };

  const handleUserSignOut = () => {
    localStorage.setItem("userPersonalData", "");
  };

  return (
    <>
      {/* navbar */}
      <Navbar bg="light" expand="lg" className="py-3">
        <NavbarBrand>
          <NavLink to="/" className="text-secondary">
            Blog-App
          </NavLink>
        </NavbarBrand>
        <Navbar.Collapse id="navbar">
          <Nav className="nav-list">
            <Nav.Link className="px-lg-4">Tech</Nav.Link>
            <Nav.Link className="px-lg-4">Design</Nav.Link>
            <Nav.Link className="px-lg-4">Culture</Nav.Link>
            <Nav.Link className="px-lg-4">Commerce</Nav.Link>
            <Nav.Link className="px-lg-4">Stock Exchange</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <NavLink
          to={localStorage.getItem("userPersonalData") ? "/userBlogs" : "/"}
          onClick={() => {
            if (localStorage.getItem("userPersonalData") === "") {
              alert("kindly login yourself first to add blogs");
            }
          }}
        >
          <Badge
            variant="primary"
            className="py-2 mx-lg-3 mx-xl-4"
            style={{ cursor: "pointer" }}
          >
            Submit a blog
          </Badge>
        </NavLink>
        <span
          className="mx-lg-2 mx-xl-4 user-avatar"
          onClick={handleOpenSignUpModal}
        >
          {localStorage.getItem("userPersonalData") ? (
            JSON.parse(localStorage.getItem("userPersonalData")).username[0]
          ) : (
            <FaSignInAlt />
          )}
        </span>
        <Navbar.Toggle aria-controls="navbar" />
        {/* Sign Up Modal */}
        <Modal
          show={openSignUpModal}
          size="lg"
          centered
          onHide={handleCloseSignUpModal}
        >
          <Modal.Header closeButton>
            <ModalTitle>Sign Up</ModalTitle>
          </Modal.Header>
          <ModalBody>
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  onChange={handleUsername}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleUserEmailAddress}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleUserPassword}
                />
              </Form.Group>
            </Form>
          </ModalBody>
          <ModalFooter>
            <p>Already Signed up?</p>
            <Button
              variant="primary"
              onClick={() => {
                handleOpenLoginModal();
                handleCloseSignUpModal();
              }}
            >
              {" "}
              Log In{" "}
            </Button>
            <Button
              variant="primary"
              type="button"
              onClick={() => {
                handleUserSignUp();
              }}
            >
              {" "}
              Sign Up{" "}
            </Button>
          </ModalFooter>
        </Modal>
        {/* login modal */}
        <Modal
          show={openLoginModal}
          size="lg"
          centered
          onHide={handleCloseLoginModal}
        >
          <Modal.Header closeButton>
            <ModalTitle>Log In</ModalTitle>
          </Modal.Header>
          <ModalBody>
            <Form>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleUserEmailAddress}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleUserPassword}
                />
              </Form.Group>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="primary"
              onClick={() => {
                userLogin();
              }}
            >
              Login
            </Button>
          </ModalFooter>
        </Modal>
        {/* sign out Modal */}
        <Modal
          show={openSignOutModal}
          size="sm"
          onHide={() => {
            setOpenSignOutModal(false);
          }}
          centered
        >
          <Modal.Header closeButton>
            <ModalTitle>Sign Out</ModalTitle>
          </Modal.Header>
          <ModalBody>
            <NavLink to="/">
              <Button
                variant="primary"
                onClick={() => {
                  setOpenSignOutModal(false);
                  handleUserSignOut();
                }}
              >
                Sign Out
              </Button>
            </NavLink>
          </ModalBody>
        </Modal>
      </Navbar>
    </>
  );
};

export default NavBar;
