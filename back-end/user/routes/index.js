var express = require('express');
var router = express.Router();


var user = require('../controller/usercontroller')  

router.post('/insert',user.insert);
router.get('/',user.get_data);
router.post('/update/:id',user.update_data);
router.get('/delete/:id',user.delete_data);

router.get('/coursedata',user.get_course);
router.post('/course_insert',user.insert_course);
router.post('/updatecourse/:id',user.update_course);
router.get('/deletecourse/:id',user.delete_course);
router.get('/course_id/:id',user.course_id);

router.get('/coursecontent',user.get_coursecontent);
router.post('/insertcoursecontent',user.insert_coursecontent);
router.post('/updatecoursecontent/:id',user.update_coursecontent);
router.get('/deletecoursecontent/:id',user.delete_coursecontent);
router.get('/coursecontent_id/:id',user.coursecontent_id);

router.get('/addmission',user.get_addmission);
router.post('/insertaddmission',user.insert_addmission);

router.get('/facultydata',user.get_faculty);
router.post('/faculty_insert',user.insert_faculty);
router.post('/facultyupdate/:id',user.update_faculty);
router.get('/deletefaculty/:id',user.delete_faculty);
router.get('/faculty_id/:id',user.faculty_id);


router.get('/join_table',user.join_table)








module.exports = router;
