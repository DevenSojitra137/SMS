import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function header() {
  return (
    <>
      <div className="main">
        <Container>
          
          <div className="main2 d-flex justify-content-between align-items-center">
            <div className="first">
              <div className="logo">
                <h1 className="teg">SMS</h1>
              </div>
            </div>
            <div className="second me-3">
              <div className="tag">
                <a href="" className="ms-4 fs-4">Home</a>
                <a href="" className="ms-4 fs-4">Contact</a>
                <a href="" className="ms-4 fs-4">Admin</a>
                <a href="" className="ms-4 fs-4">Student</a>
              </div>
            </div>
          </div> 
          
        </Container>
      </div>
    </>
  );
}

export default header;
