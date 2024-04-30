import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Container } from "react-bootstrap";


export default function () {



  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <Container>
          <div className="main mx-auto my-auto w-75 d-flex justify-content-center align-items-center border p-4">
            <div className="ce">
              <div className="he ">
                <h1>Add admission</h1>
              </div>
              <div className="fo mt-5 ">
                <div className="hea d-flex justify-content-center mb-4">
                  <h5>Reg No:</h5>
                </div>
                <div className="txt">
                  <input
                    type="text"
                    className="w-100"
                    onChange={(e) => setregno(e.target.value)}
                  />
                </div>
                <div className="hea d-flex justify-content-center mb-4">
                  <h5>studentname:</h5>
                </div>
                <div className="txt">
                  <input
                    type="text"
                    className="w-100"
                    onChange={(e) => setstudentname(e.target.value)}
                  />
                </div>
                <div className="hea d-flex justify-content-center mb-4">
                  <h5>coursename:</h5>
                </div>
                <div className="txt">
                  <input
                    type="text"
                    className="w-100"
                    onChange={(e) => setcoursename(e.target.value)}
                  />
                </div>
                <div className="hea d-flex justify-content-center mb-4">
                  <h5>contect:</h5>
                </div>
                <div className="txt">
                  <input
                    type="text"
                    className="w-100"
                    onChange={(e) => setcontect(e.target.value)}
                  />
                </div>
                <div className="hea d-flex justify-content-center mb-4">
                  <h5>subcontect:</h5>
                </div>
                <div className="txt">
                  <input
                    type="text"
                    className="w-100"
                    onChange={(e) => setsubcontect(e.target.value)}
                  />
                </div>
                <div className="bt d-flex justify-content-center mt-4">
                  <input type="button" className="" value="Add" onClick={btn} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
