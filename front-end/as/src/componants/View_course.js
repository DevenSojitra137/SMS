import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function View_course() {
  const [course, setcourse] = useState([]);
  const [id, setid] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:2000/coursedata")
      .then(function (response) {
        // handle success
        console.log(response.data.get_course);
        setcourse(response.data.get_course);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  
    const deletedata = (id) => {

      axios
        .get(`http://localhost:2000/deletecourse/${id}`)
        .then(function (response) {
          // handle success
          // console.log(response.data.deletecourse);
          // setid(response.data.deletecourse);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

        axios
      .get("http://localhost:2000/coursedata")
      .then(function (response) {
        // handle success
        console.log(response.data.get_course);
        setcourse(response.data.get_course);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    }

    const updatedata = (id) => {
   
      axios
        .get(`http://localhost:2000/updatecourse/${id}`)
        .then(function (response) {
          // handle success
          console.log(response.data.get_faculty);
          setcourse(response.data.get_faculty);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
  
    }

  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <Container>
          <div className="main mx-auto my-auto w-75 d-flex justify-content-center align-items-center border p-4">
            <div className="ce">
              <div className="he ">
                <h1>View course</h1>
              </div>
              <div className="view text-center m-auto">
                <table border={1} className="m-auto">
                  <tr>
                    <th>Course Name</th>
                  </tr>
                  {course.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>
                            {item.coursename}
                          </td>
                          <td><input type="button" value='delete' onClick={() => { deletedata(item._id) }} /></td>
                          <td><Link to={`/update_course/${item._id}`}><button onClick={updatedata}>Update</button></Link></td>
                        </tr>
                      </>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
