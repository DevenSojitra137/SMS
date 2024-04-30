import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Container } from 'react-bootstrap'
import axios from 'axios'


export default function Add_coursecontent() {

    const [coursecontent, setcoursecontent] = useState()
    const [coursename, setcoursename] = useState()
    const [courseduration, setcourseduration] = useState()

    const btn = () =>{
      axios.post('http://localhost:2000/insertcoursecontent',{
         coursename:coursename, 
         courseduration:courseduration, 
         coursecontent:coursecontent 
      })
      .then(function (response) {
          // handle success
          console.log(response.data.coursecontent);
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
      <Header/>
      <div className="d-flex">
                <Sidebar />
                <Container>
                    <div className="main mx-auto my-auto w-75 d-flex justify-content-center align-items-center border p-4">
                        <div className="ce">
                            <div className="he ">
                                <h1>Add course</h1>
                            </div>
                            <div className="fo mt-5 ">
                                <div className="hea d-flex justify-content-center mb-4">
                                    <h5>Course Name:</h5>
                                </div>
                                <div className="txt">
                                    <input type="text" className='w-100' onChange={(e)=>setcoursename(e.target.value)} />
                                </div>
                                <div className="hea d-flex justify-content-center mb-4">
                                    <h5>Course Duration:</h5>
                                </div>
                                <div className="txt">
                                    <input type="text" className='w-100' onChange={(e)=>setcourseduration(e.target.value)} />
                                </div>
                                <div className="hea d-flex justify-content-center mb-4">
                                    <h5>Course Content:</h5>
                                </div>
                                <div className="txt">
                                    <input type="text" className='w-100' onChange={(e)=>setcoursecontent(e.target.value)} />
                                </div>
                                <div className="bt d-flex justify-content-center mt-4">
                                    <input type="button" className='' value="Add" onClick={btn}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            
    </>
  )
}
