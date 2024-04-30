import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import { PiSelectionBackground } from 'react-icons/pi';
import { BsFillArrowRightCircleFill, BsHandbag ,BsFillPersonPlusFill } from 'react-icons/bs';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { AiFillPieChart } from 'react-icons/ai';
import Sidebar from './Sidebar';




function card() {
    return (
        <>
        <Sidebar/>
            {/* <Container>
                <div className="main d-flex justify-content-center">
                    <div className="first ms-3">
                        <div>
                            <Card style={{ width: '18rem', background: '#17A2B8' }}>
                                <Card.Body className='text-white'>
                                    <div className='d-flex'>
                                        <div className='me-5'>
                                            <Card.Title className='mb-2 fs-1 fw-bold text-white'>150</Card.Title>
                                            <Card.Text>
                                                New Order
                                            </Card.Text>
                                        </div>
                                        <div className='d-flex align-items-center fs-1 ms-5 ico'>
                                            
                                                <BsHandbag/>
                                            
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Header className='text-white text-center'>More Info <BsFillArrowRightCircleFill /></Card.Header>
                            </Card>
                        </div>
                    </div>
                    <div className="second ms-3">
                        <div>
                            <Card style={{ width: '18rem', background: '#28A745' }}>
                                <Card.Body className='text-white'>
                                    <div className='d-flex'>
                                        <div className='me-5'>
                                            <Card.Title className='mb-2 fs-1 fw-bold text-white'>53%</Card.Title>
                                            <Card.Text>
                                                Bounce Rate
                                            </Card.Text>
                                        </div>
                                        <div className='d-flex align-items-center fs-1 ms-5 ico'>
                                            
                                                <BiSolidBarChartAlt2/>
                                            
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Header className='text-white text-center'>More Info <BsFillArrowRightCircleFill /></Card.Header>
                            </Card>
                        </div>
                    </div>
                    <div className="third ms-3">
                        <div>
                            <Card style={{ width: '18rem', background: '#FFC107' }}>
                                <Card.Body className='text-black'>
                                    <div className='d-flex'>
                                        <div className='me-5'>
                                            <Card.Title className='mb-2 fs-1 fw-bold text-black'>44</Card.Title>
                                            <Card.Text>
                                                User Registration
                                            </Card.Text>
                                        </div>
                                        <div className='d-flex align-items-center fs-1 ms-4 ico'>
                                            
                                                <BsFillPersonPlusFill/>
                                            
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Header className='text-black text-center'>More Info <BsFillArrowRightCircleFill /></Card.Header>
                            </Card>
                        </div>
                    </div>
                    <div className="four ms-3">
                        <div>
                            <Card style={{ width: '18rem', background: '#C6303E' }}>
                                <Card.Body className='text-white'>
                                    <div className='d-flex'>
                                        <div className='me-5'>
                                            <Card.Title className='mb-2 fs-1 fw-bold text-white'>65</Card.Title>
                                            <Card.Text>
                                                Unique Visitor
                                            </Card.Text>
                                        </div>
                                        <div className='d-flex align-items-center fs-1 ms-5 ico'>
                                            
                                                <AiFillPieChart/>
                                            
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Header className='text-white text-center'>More Info <BsFillArrowRightCircleFill /></Card.Header>
                            </Card>
                        </div>
                    </div>
                    
                </div>
            </Container> */}
        </>
    )
}

export default card;
