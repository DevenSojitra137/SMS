import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


export default function Update_coursecontent() {

  const { id } = useParams();
  const [coco, setcoco] = useState([]);



  useEffect(() => {
    console.log('view')
    axios
    .get(`http://localhost:2000/coursecontent_id/${id}`)
    .then(function (response) {
      // handle success
      console.log(response.data.coursecontent_id);
      setcoco(response.data.coursecontent_id);
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
        
        setcoco({...coco,[name]:value})

        // console.log('m',setco)

    }

  const btn = () => {

    axios
    .post(`http://localhost:2000/updatecoursecontent/${id}`,{
        coco
    })
    .then(function (response) {
      // handle success
      console.log('bb')
      console.log(response.data);
      // console.log(co)
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
                <h1>update course</h1>
              </div>
              <div className="fo mt-5 ">
                <div className="hea d-flex justify-content-center mb-4">
                  <h5>Course Name:</h5>
                </div>
                <div className="txt">
                  <input
                    type="text"
                    className="w-100"
                    value={coco.coursename}
                    name="coursename"
                    onChange={handle}
                  />
                </div>
                <div className="hea d-flex justify-content-center mb-4">
                  <h5>Course Duration:</h5>
                </div>
                <div className="txt">
                  <input
                    type="text"
                    className="w-100"
                    value={coco.courseduration}
                    name="courseduration"
                    onChange={handle}
                  />
                </div>
                <div className="hea d-flex justify-content-center mb-4">
                  <h5>Course Content:</h5>
                </div>
                <div className="txt">
                  <input
                    type="text"
                    className="w-100"
                    value={coco.coursecontent}
                    name="coursecontent"
                    onChange={handle}
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
