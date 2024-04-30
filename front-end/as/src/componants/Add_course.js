import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Header from './Header'
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';


function Add_course() {
    
    const [coursename, setcoursename] = useState()

    const btn = () =>{
        axios.post('http://localhost:2000/course_insert',{
           coursename:coursename 
        })
        .then(function (response) {
            // handle success
            console.log(response);
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
                                <h1>Add course</h1>
                            </div>
                            <div className="fo mt-5 ">
                                <div className="hea d-flex justify-content-center mb-4">
                                    <h5>Course Name:</h5>
                                </div>
                                <div className="txt">
                                    <input type="text" className='w-100' onChange={(e)=>setcoursename(e.target.value)} />
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

export default Add_course
