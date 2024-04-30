import "./App.css";
import Navbar from "./componants/Navbar";
import Header from "./componants/Header";
import Card from "./componants/Card";
import Sidebar from "./componants/Sidebar";
import Add_course from "./componants/Add_course";
import { Routes, Route } from "react-router-dom";
import Home from "./componants/Home";
import View_course from "./componants/View_course";
import Add_faculty from "./componants/Add_faculty";
import View_faculty from "./componants/View_faculty";
import Add_coursecontent from "./componants/Add_coursecontent";
import Update_faculty from "./componants/Update_faculty";
import Update_course from "./Update_course";
import View_coursecontent from "./componants/View_coursecontent";
import Update_coursecontent from "./componants/Update_coursecontent";
import Add_addmission from './componants/Add_addmission'

function App() {
  return (
    <>
      {/* <Navbar/>
      {/* <Header/> */}
      {/* <Card/> */}
      {/* <Sidebar/> */}
      {/* <Add_course/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_course" element={<Add_course/>} />
        <Route path="/view_course" element={<View_course/>} />
        <Route path="/add_faculty" element={<Add_faculty/>} />
        <Route path="/view_faculty" element={<View_faculty/>} />
        <Route path="/update_faculty/:id" element={<Update_faculty/>}></Route>
        <Route path="/update_course/:id" element={<Update_course/>}></Route>
        <Route path="/add_coursecontent" element={<Add_coursecontent/>} />
        <Route path="/view_coursecontent" element={<View_coursecontent/>}></Route>
        <Route path="/update_coursecontent/:id" element={<Update_coursecontent/>}></Route>
        <Route path="/add_addmission" element={<Add_addmission/>}></Route>
      </Routes>
    </>
  );
}

export default App;
