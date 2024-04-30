import { IoSearchSharp, IoSpeedometer } from "react-icons/io5";
import { BiRadioCircle, BiSolidWidget, BiSolidCircle } from "react-icons/bi";
import { Accordion } from "react-bootstrap"
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>

            <div className="sidebar w-25 text-start ps-3">
                <div>
                    <div className="pt-3">
                        <h5>AdminLTE</h5>
                        <hr />
                    </div>

                    {/* <div className="user d-flex align-items-center">
                        <img src={require(`../images/user.jpg`)} />
                        <span className="ms-4">Alexander Pierce</span>
                    </div> */}

                    {/* <hr /> */}

                    <div className="textbox d-flex align-items-center m-3">
                        <input type="text" placeholder="Search" className="border" />
                        <button className="border border-start-0"><IoSearchSharp size={20} /></button>
                    </div>

                    <div>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header ><IoSpeedometer size={20} className=" me-2" /><span className="fw-bold">Faculty</span></Accordion.Header>
                                <Accordion.Body>
                                    <span className="d-flex align-items-center"><BiRadioCircle size={30} /> <Link to="/Add_Faculty" style={{color:"black", textDecoration:"none"}}>Add Faculty</Link> </span>
                                    <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> <Link to="/View_Faculty" style={{color:"black", textDecoration:"none"}}>View Faculty</Link></span>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="items">
                        {/* <div className="widgets mt-2">
                            <p><span><BiSolidWidget size={20} /></span>Widgets</p>
                            <h5>New</h5>
                        </div> */}

                        <div id="Layout Options">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header ><IoSpeedometer size={20} className="me-2" /><span className="fw-bold">Course</span></Accordion.Header>
                                    <Accordion.Body>
                                        <span className="d-flex align-items-center"><BiRadioCircle size={30} /> <Link to="/add_course" style={{color:"black", textDecoration:"none"}}>Add Course</Link></span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /><Link to="/view_course" style={{color:"black", textDecoration:"none"}}> View Course</Link></span>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <div id="Charts">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header ><IoSpeedometer size={20} className="me-2" /><span className="fw-bold">Course Content</span></Accordion.Header>
                                    <Accordion.Body>
                                        <span className="d-flex align-items-center"><BiRadioCircle size={30} /> <Link to="/add_coursecontent" style={{color:"black", textDecoration:"none"}}>Add Course Content</Link></span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /><Link to="/view_coursecontent" style={{color:"black", textDecoration:"none"}}> View Course Content</Link></span>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <div id="UI Elements">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header ><IoSpeedometer size={20} className="me-2" /><span className="fw-bold"> Admission</span></Accordion.Header>
                                    <Accordion.Body>
                                        <span className="d-flex align-items-center"><BiRadioCircle size={30} /> <Link to="/add_addmission" style={{color:"black", textDecoration:"none"}}>Add Admission</Link></span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> View Admission</span>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <div className="widgets mt-2 fw-bold">
                            <p><span><BiSolidWidget size={20} /></span> <Link to="/Login" style={{color:"black", textDecoration:"none"}}>Login</Link> </p>
                            <h5>Admin</h5>
                        </div>

                        <div>
                            {/* <div id="Forms">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header ><IoSpeedometer size={20} className="me-2" /><span>Forms</span></Accordion.Header>
                                    <Accordion.Body>
                                        <span className="d-flex align-items-center"><BiRadioCircle size={30} /> General Elements</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Advanced Elements</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Editors</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Validation</span>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <div id=" Tables">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header ><IoSpeedometer size={20} className="me-2" /><span> Tables</span></Accordion.Header>
                                    <Accordion.Body>
                                        <span className="d-flex align-items-center"><BiRadioCircle size={30} /> Simple Tables</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> DataTables</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> jsGrid</span>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <span className="fw-bold">EXAMPLES</span>

                        <div className="widgets calendar mt-2">
                            <p><span><BiSolidWidget size={20} /></span> Calendar</p>
                            <h5>2</h5>
                        </div>

                        <div className="widgets Gallery mt-2 ">
                            <p><span><BiSolidWidget size={20} /></span>  Gallery</p>
                        </div>

                        <div className="widgets Kanban Board mt-2">
                            <p><span><BiSolidWidget size={20} /></span> Kanban Board</p>
                        </div>

                        <div id="Mailbox">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header ><IoSpeedometer size={20} className="me-2" /><span>  Mailbox</span></Accordion.Header>
                                    <Accordion.Body>
                                        <span className="d-flex align-items-center"><BiRadioCircle size={30} /> Inbox</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Compose</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Read</span>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <div id="Pages">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header ><IoSpeedometer size={20} className="me-2" /><span> Pages</span></Accordion.Header>
                                    <Accordion.Body>
                                        <span className="d-flex align-items-center"><BiRadioCircle size={30} />Invoice</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} />Profile</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> E-commerce</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Projects</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Project Add</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Project Edit</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Project Detail</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Contacts</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> FAQ</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Contact us</span>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <div id="Extras">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header ><IoSpeedometer size={20} className="me-2" /><span> Extras</span></Accordion.Header>
                                    <Accordion.Body>
                                        <div id="Login & Register v1">
                                            <Accordion defaultActiveKey="0" flush>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header ><IoSpeedometer size={20} className="me-2" /><span> Login & Register v1</span></Accordion.Header>
                                                    <Accordion.Body>
                                                        <span className="d-flex align-items-center"><BiRadioCircle size={30} /> Login v1</span>
                                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Register v1</span>
                                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Forgot Password v1</span>
                                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Recover Password v1</span>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>

                                        <div id="Login & Register v2">
                                            <Accordion defaultActiveKey="0" flush>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header ><IoSpeedometer size={20} className="me-2" /><span> Login & Register v2</span></Accordion.Header>
                                                    <Accordion.Body>
                                                        <span className="d-flex align-items-center"><BiRadioCircle size={30} /> Login v2</span>
                                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Register v2</span>
                                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Forgot Password v2</span>
                                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Recover Password v2</span>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>

                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Lockscreen</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Legacy User Menu</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Language Menu</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Error 404</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Error 500</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Pace</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Blank Page</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Starter Page</span>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <div id="Search">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header ><IoSpeedometer size={20} className="me-2" /><span> Search</span></Accordion.Header>
                                    <Accordion.Body>
                                        <span className="d-flex align-items-center"><BiRadioCircle size={30} /> Simple Search</span>
                                        <span className="d-flex align-items-center" ><BiRadioCircle size={30} /> Enhanced</span>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <span className="fw-bold">MISCELLANEOUS</span>

                        <div className="widgets Tabbed IFrame Plugin mt-3">
                            <p><span><BiSolidWidget size={20} /></span>Tabbed IFrame Plugin</p>
                        </div>

                        <div className="widgets  Documentation">
                            <p><span><BiSolidWidget size={20} /></span> Documentation</p>
                        </div>

                        <span className="fw-bold mb-5">MULTI LEVEL EXAMPLE</span>

                        <div className="widgets mt-3 Level 1">
                            <p><span><BiSolidCircle size={20} /></span>Level 1</p>
                        </div>

                        <div className="Level 1">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header ><IoSpeedometer size={20} className="me-2" /><span> Level 1</span></Accordion.Header>
                                    <Accordion.Body>
                                        <span className="d-flex align-items-center"><BiRadioCircle size={30} />Level 2</span>
                                        <div className="Level 2">
                                            <Accordion defaultActiveKey="0" flush>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header ><IoSpeedometer size={20} className="me-2" /><span> Level 2</span></Accordion.Header>
                                                    <Accordion.Body>
                                                        <span className="d-flex align-items-center"><BsRecordCircle size={20} className="me-2" />Level 3</span>
                                                        <span className="d-flex align-items-center"><BsRecordCircle size={20} className="me-2" />Level 3</span>
                                                        <span className="d-flex align-items-center"><BsRecordCircle size={20} className="me-2" />Level 3</span>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <div className="widgets Level 1">
                            <p><span><BiSolidCircle size={20} /></span> Level 1</p>
                        </div>

                        <span className="fw-bold ">LABELS</span>

                        <div className="widgets Important mt-3">
                            <p><span><BiRadioCircle size={30} color="red" /></span>Important</p>
                        </div>

                        <div className="widgets  Warning">
                            <p><span><BiRadioCircle size={30} color="yellow" /></span>Warning</p>
                        </div>

                        <div className="widgets Important">
                            <p><span><BiRadioCircle size={30} color="cyan" /></span>Informational</p>
                        </div> */}
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar;
