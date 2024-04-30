import React from 'react'
import Header from './Header'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';





export default function View_faculty() {

  const [faculty, setfaculty] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/facultydata")
      .then(function (response) {
        // handle success
        console.log(response.data.get_faculty);
        setfaculty(response.data.get_faculty);
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
      .get(`http://localhost:2000/deletefaculty/${id}`)
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
      .get("http://localhost:2000/facultydata")
      .then(function (response) {
        // handle success
        console.log(response.data.get_faculty);
        setfaculty(response.data.get_faculty);
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
      .get(`http://localhost:2000/facultyupdate/${id}`)
      .then(function (response) {
        // handle success
        console.log(response.data.get_faculty);
        setfaculty(response.data.get_faculty);
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
        <Container className='w-75'>
          <div className="main mx-auto my-auto w-75 d-flex justify-content-center align-items-center border p-4">
            <div className="ce">
              <div className="he ">
                <h1>View Faculty</h1>
              </div>
              <div className="view text-center m-auto">
                <table border={1} className="p-5">
                  <tr>
                    <th className='m-3'>Faculty Name</th>
                    <th className='m-3'>Faculty Email</th>
                    <th className='m-3'>Faculty Password</th>
                    <th className='m-3'>Faculty Contect</th>
                  </tr>
                  {faculty.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>
                            {item.name}
                          </td>
                          <td>
                            {item.email}
                          </td>
                          <td>
                            {item.password}
                          </td>
                          <td>
                            {item.contact}
                          </td>
                          <td><input type="button" value='delete' onClick={() => { deletedata(item._id) }} /></td>
                          <td><Link to={`/update_faculty/${item._id}`}><input type="button" value='Update' onClick={() => { updatedata(item._id) }} /></Link></td>
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
