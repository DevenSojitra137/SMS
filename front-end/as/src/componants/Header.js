import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineSearch } from 'react-icons/ai';
import { PiChatsCircleLight } from 'react-icons/pi';
import { PiBellLight } from 'react-icons/pi';
import { LiaExpandArrowsAltSolid } from 'react-icons/lia';
import { AiFillAppstore } from 'react-icons/ai';
import Sidebar from './Sidebar';




function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='me-3'>
                            <h6>Home</h6>
                        </div>
                        <div>
                            <h6>Contect</h6>
                        </div>
                    </div>
                    <div className='icon d-flex align-items-center justify-content-center'>
                        <div className='m-2'>
                            <span><AiOutlineSearch/></span>
                        </div>
                        <div className='m-2'>
                            <span><PiChatsCircleLight/></span>
                        </div>
                        <div className='m-2'>
                            <span><PiBellLight/></span>
                        </div>
                        <div className='m-2'>
                            <span><LiaExpandArrowsAltSolid/></span>
                        </div>
                        <div className='m-2'>
                            <span><AiFillAppstore/></span>
                        </div>
                    </div>
                </Container>
            </Navbar>
            <Navbar/>
        </>
        
    )
}

export default Header
