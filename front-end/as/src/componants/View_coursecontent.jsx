import React from 'react'
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from 'react';


export default function () {

  const [coursecontent , setcoursecontent] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:2000/coursecontent")
      .then(function (response) {
        // handle success
        console.log(response.data.coursecontentdata);
        setcoursecontent(response.data.coursecontentdata);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const deletedata = (id) =>{

    axios
        .get(`http://localhost:2000/deletecoursecontent/${id}`)
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
      .get("http://localhost:2000/coursecontent")
      .then(function (response) {
        // handle success
        console.log(response.data.get_course);
        setcoursecontent(response.data.coursecontentdata);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

  }

  const updatedata = (id) =>{

    axios
        .get(`http://localhost:2000/updatecoursecontent/${id}`)
        .then(function (response) {
          // handle success
          console.log(response.data.update_coursecontent);
          setcoursecontent(response.data.update_coursecontent);
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
                <h1>View coursecontent</h1>
              </div>
              <div className="view text-center m-auto">
                <table border={1} className="m-auto">
                  <tr>
                    <th>Course Name</th>
                    <th>Course Duration</th>
                    <th>Course Content</th>
                  </tr>
                  {coursecontent.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>
                            {item.coursename}
                          </td>
                          <td>
                            {item.courseduration}
                          </td>
                          <td>
                            {item.coursecontent}
                          </td>
                          <td><input type="button" value='delete' onClick={() => { deletedata(item._id) }} /></td>
                          <td><Link to={`/update_coursecontent/${item._id}`}><button onClick={()=>{updatedata(item._id)}}>Update</button></Link></td>
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
  )
}
