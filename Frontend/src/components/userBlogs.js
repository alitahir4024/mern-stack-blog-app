import { Component, Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalTitle,
  ModalBody,
  ModalFooter,
  Form,
  Card,
  CardImg,
} from "react-bootstrap";
import NavBar from "./NavBar";
import axios from "axios";
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

class UserBlogs extends Component {
  state = {
    // for modal to open and close
    showBlogModal: false,
    userSignupId: JSON.parse(localStorage.getItem("userPersonalData"))._id,
    // array to send
    userBlogData: [],
    // to add time to every blog added
    blogTime: new Date().toLocaleDateString(),
    // array to map
    userBlogsData: [],
    imgArr: [
      blogImg1,
      blogImg2,
      blogImg3,
      blogImg4,
      blogImg5,
      blogImg6,
      blogImg7,
      blogImg8,
      blogImg9,
      blogImg10,
      blogImg11,
      blogImg12,
      blogImg13,
    ],
    randomNum: Math.floor(Math.random() * 13),
  };

  openBlogModal = () => {
    this.setState({
      showBlogModal: true,
    });
  };

  closeBlogModal = () => {
    this.setState({
      showBlogModal: false,
    });
  };

  addBlog = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  postBlogs = () => {
    this.setState(
      {
        userBlogData: [
          ...this.state.userBlogData,
          {
            blogTitle: this.state.blogTitle,
            blogSubTitle: this.state.blogSubTitle,
            blogDescription: this.state.blogDescription,
            blogPhoto: this.state.blogPhoto,
            blogTime: this.state.blogTime,
          },
        ],
      },
      async () => {
        await axios
          .post(
            `https://blog-application-mern.herokuapp.com/api/userBlogs/${this.state.userSignupId}`,
            this.state.userBlogData
          )
          .then((res) => {
            if (res.data === "Blog Added") {
              this.closeBlogModal();
              this.getBlogData();
            } else {
              alert("Fill all the fields");
            }
          });
      }
    );
  };

  getBlogData = async () => {
    const { data } = await axios.get(
      "https://blog-application-mern.herokuapp.com/api/userBlogs"
    );
    const userBlogsData = await data.filter((obj) => {
      return obj.userId === this.state.userSignupId;
    });
    this.setState({
      userBlogsData: userBlogsData,
    });
  };

  fetchUserBlogData = async () => {
    const { data } = await axios.get(
      "https://blog-application-mern.herokuapp.com/api/userBlogs"
    );
    const userBlogsData = await data.filter((obj) => {
      return obj.userId === this.state.userSignupId;
    });
    this.setState({
      userBlogsData: userBlogsData,
    });
  };

  componentDidMount() {
    this.fetchUserBlogData();
  }

  deleteUserBlog = async (id) => {
    await axios
      .post(
        `https://blog-application-mern.herokuapp.com/api/userBlogs/deleteBlog/${id}`
      )
      .then((res) => {
        if (res.data === "Blog Deleted Successfully") {
          alert(res.data);
          this.fetchUserBlogData();
        } else {
          alert(res.data);
        }
      });
  };

  render() {
    if (localStorage.getItem("userPersonalData") === "") {
      this.props.history.push("/");
      window.location.reload();
    }
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Row className="user-blog-profile py-5">
            <Col
              xs={12}
              className="d-flex flex-column align-items-center justify-content-around"
            >
              {localStorage.getItem("userPersonalData") ? (
                <>
                  <span className="user-avatar-large text-secondary">
                    {
                      JSON.parse(localStorage.getItem("userPersonalData"))
                        .username[0]
                    }
                  </span>
                  <h1 className="font-weight-bold text-dark py-3" id="username">
                    {
                      JSON.parse(localStorage.getItem("userPersonalData"))
                        .username
                    }
                  </h1>
                  <h6 className="text-secondary" id="userEmailAddress">
                    {
                      JSON.parse(localStorage.getItem("userPersonalData"))
                        .userEmailAddress
                    }
                  </h6>
                </>
              ) : (
                <h1>No data found </h1>
              )}
              <Button
                variant="outline-secondary"
                className="my-3 px-5"
                onClick={() => {
                  localStorage.setItem("userPersonalData", "");
                  this.props.history.push("/");
                }}
              >
                Sign Out
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <h3 className="py-3 text-sm-center d-flex align-items-center justify-content-start justify-content-xs-center">
                {JSON.parse(localStorage.getItem("userPersonalData")).username +
                  "'s Blogs"}
              </h3>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-center justify-content-md-end"
            >
              <Button onClick={this.openBlogModal}>Add a Blog</Button>
            </Col>
          </Row>
        </Container>
        {/* modal for user to write write blogs */}
        <Modal
          show={this.state.showBlogModal}
          size="lg"
          onHide={this.closeBlogModal}
          centered
        >
          <Modal.Header closeButton>
            <ModalTitle>Write your own blog</ModalTitle>
          </Modal.Header>
          <ModalBody>
            <Form>
              <Form.Group>
                <Form.Label>Blog Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Blog Title"
                  name="blogTitle"
                  onChange={this.addBlog}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Blog Sub Title</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Blog Sub Title"
                  name="blogSubTitle"
                  onChange={this.addBlog}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Blog description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter Blog Description"
                  name="blogDescription"
                  onChange={this.addBlog}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.File
                  label="Chose Blog Photo"
                  onChange={this.addBlog}
                  name="blogPhoto"
                  required
                />
              </Form.Group>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button variant="primary" type="button" onClick={this.postBlogs}>
              Add Blog
            </Button>
          </ModalFooter>
        </Modal>
        <Container fluid>
          <Row>
            {this.state.userBlogsData === [] ||
            this.state.userBlogsData.length <= 0 ? (
              <h1 className="text-center text-dark font-weight-bold pt-5 w-100">
                No Blogs Found
              </h1>
            ) : (
              this.state.userBlogsData.map((blogObj, index) => {
                return (
                  <Col
                    xs={12}
                    md={6}
                    lg={4}
                    xl={3}
                    className="py-3"
                    key={index}
                  >
                    <Card className="blog-card">
                      <CardImg
                        variant="top"
                        src={this.state.imgArr[this.state.randomNum]}
                      />
                      <Card.Body>
                        <Card.Title>{blogObj.blogTitle}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {blogObj.blogSubTitle}
                        </Card.Subtitle>
                        <Card.Text>{blogObj.blogDescription}</Card.Text>
                        <Card.Text className="mt-2 text-muted">
                          {blogObj.blogTime}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <Card.Link>Edit Blog</Card.Link>
                        <Card.Link
                          onClick={() => {
                            this.deleteUserBlog(blogObj._id);
                          }}
                        >
                          Delete Blog
                        </Card.Link>
                      </Card.Footer>
                    </Card>{" "}
                  </Col>
                );
              })
            )}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default UserBlogs;
