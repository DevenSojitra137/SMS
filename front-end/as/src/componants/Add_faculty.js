import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'


export default function Add_faculty() {

    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [contact, setcontact] = useState()

    const btn = () =>{
        axios.post('http://localhost:2000/faculty_insert',{
           name:name, 
           email:email, 
           password:password,
           contact:contact 
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
                                <h1>Add Faculty</h1>
                            </div>
                            <div className="fo mt-5 ">
                                <div className="hea d-flex justify-content-center mb-4">
                                    <h5>Faculty Name:</h5>
                                </div>
                                <div className="txt">
                                    <input type="text" className='w-100' onChange={(e) => setname(e.target.value)} />
                                </div>
                                <div className="hea d-flex justify-content-center mb-4">
                                    <h5>Email:</h5>
                                </div>
                                <div className="txt">
                                    <input type="text" className='w-100' onChange={(e) => setemail(e.target.value)} />
                                </div>
                                <div className="hea d-flex justify-content-center mb-4">
                                    <h5>Password:</h5>
                                </div>
                                <div className="txt">
                                    <input type="text" className='w-100' onChange={(e) => setpassword(e.target.value)} />
                                </div>
                                <div className="hea d-flex justify-content-center mb-4">
                                    <h5>Contact:</h5>
                                </div>
                                <div className="txt">
                                    <input type="text" className='w-100' onChange={(e) => setcontact(e.target.value)} />
                                </div>
                                <div className="bt d-flex justify-content-center mt-4">
                                    <input type="submit" className='' value="Add" onClick={btn} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
