import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Update_faculty() {
  const { id } = useParams();
  const [fe, setfe] = useState([]);

  useEffect(() => {

    axios
    .get(`http://localhost:2000/faculty_id/${id}`)
    .then(function (response) {
      // handle success
      console.log(response.data.faculty_id);
      setfe(response.data.faculty_id);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }, [])
  

    const handle = (e) => {

        e.preventDefault()
        const {name,value} = e.target;

        console.log('nn',name)
        
        setfe({...fe,[name]:value})

    }

  const btn = () => {

    axios
    .post(`http://localhost:2000/facultyupdate/${id}`,{
        fe
    })
    .then(function (response) {
      // handle success
      console.log(response.data.updatefaculty);
      console.log(fe)
    //   setfe(response.data.faculty_id);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  };

  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <Container>
          <div className="main mx-auto my-auto w-75 d-flex justify-content-center align-items-center border p-4">
            <div className="ce">
              <div className="he ">
                <h1>Add Faculty</h1>
              </div>
              <div className="fo mt-5 ">
                <div className="hea d-flex justify-content-center mb-4">
                  <h5>Faculty Name:</h5>
                </div>
                <div className="txt">
                  <input
                    type="text"
                    className="w-100"
                    value={fe.name}
                    onChange={handle}
                    name="name"
                  />
                </div>
                <div className="hea d-flex justify-content-center mb-4">
                  <h5>Email:</h5>
                </div>
                <div className="txt">
                  <input
                    type="text"
                    className="w-100"
                    value={fe.email}
                    name="email"
                    onChange={handle}
                  />
                </div>
                <div className="hea d-flex justify-content-center mb-4">
                  <h5>Password:</h5>
                </div>
                <div className="txt">
                  <input
                    type="text"
                    className="w-100"
                    value={fe.password}
                    name="password"
                    onChange={handle}
                  />
                </div>
                <div className="hea d-flex justify-content-center mb-4">
                  <h5>Contact:</h5>
                </div>
                <div className="txt">
                  <input
                    type="text"
                    className="w-100"
                    value={fe.contact}
                    name="contact"
                    onChange={handle}
                  />
                </div>
                <div className="bt d-flex justify-content-center mt-4">
                  <button onClick={btn}>Update</button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
