var usermodel = require('../model/usermodel')
var coursemodel = require('../model/coursemodel')
var coursecontent = require('../model/coursecontent')
var addmission = require('../model/addmission')
var faculty = require('../model/faculty')

exports.insert = async (req,res) => {

    var data = await usermodel.create(req.body);

    res.status(200).json({
        status:"succsess",
        data
    })
}

exports.get_data = async (req,res) => {

    var getdata = await usermodel.find();

    res.status(200).json({
        status:"succsess",
        getdata
    })
 }

 exports.update_data = async (req,res) => {

    var id = req.params.id;

    var updatedata = await usermodel.findByIdAndUpdate(id,req.body);

    
    res.status(200).json({
        status:"succsess",
        updatedata
    })
 }

 exports.delete_data = async (req,res) => {

    var id = req.params.id;

    var deletedata = await usermodel.findByIdAndDelete(id);

    
    res.status(200).json({
        status:"succsess",
        deletedata
    })
 }

//  ===========================================================================================
 
 exports.get_course = async (req,res) => {


    var get_course = await coursemodel.find();
    

    
    res.status(200).json({
        status:"succsess",
        get_course
    })
 }

 exports.insert_course = async (req,res) => {


    var insert_course = await coursemodel.create(req.body);

    
    res.status(200).json({
        status:"succsess",
        insert_course
    })
 }

 exports.update_course = async (req,res) => {

    var id = req.params.id;

    var updatecourse = await coursemodel.findByIdAndUpdate(id,req.body.co);

    
    res.status(200).json({
        status:"succsess",
        updatecourse
    })
 }

 exports.delete_course = async (req,res) => {

    var id = req.params.id;

    var deletecourse = await coursemodel.findByIdAndDelete(id);

    
    res.status(200).json({
        status:"succsess",
        deletecourse
    })
 }

 exports.course_id = async (req,res) => {

    var id = req.params.id;

    var course_id = await coursemodel.findById(id);

    
    res.status(200).json({
        status:"succsess",
        course_id
    })
 }

//  ====================================================================================

 exports.get_coursecontent = async (req,res) => {

    var coursecontentdata = await coursecontent.find();

    res.status(200).json({
        status:"succsess",
        coursecontentdata
    })
 }

 exports.insert_coursecontent = async (req,res) => {

    var coursecontentdata = await coursecontent.create(req.body);

    res.status(200).json({
        status:"succsess",
        coursecontentdata
    })
 }

 exports.update_coursecontent = async (req,res) => {

    var id = req.params.id;

    var update_coursecontent = await coursecontent.findByIdAndUpdate(id,req.body.coco);

    
    res.status(200).json({
        status:"succsess",
        update_coursecontent
    })
 }

 exports.delete_coursecontent = async (req,res) => {

    var id = req.params.id;

    var delete_coursecontent = await coursecontent.findByIdAndDelete(id,req.body);

    
    res.status(200).json({
        status:"succsess",
        delete_coursecontent
    })
 }

 exports.coursecontent_id = async (req,res) => {

    var id = req.params.id;

    var coursecontent_id = await coursecontent.findById(id);

    
    res.status(200).json({
        status:"succsess",
        coursecontent_id
    })
 }

//  =====================================================================================

exports.insert_addmission = async (req,res) => {

    var data = await addmission.create(req.body);

    res.status(200).json({
        status:'succsess',
        data
    })
}

exports.get_addmission = async (req,res) => {

    var data = await addmission.find();

    res.status(200).json({
        status:'succsess'
        ,
        data
    })
}

// ====================================================================================


exports. get_faculty = async (req,res) => {


    var get_faculty = await faculty.find();
    
    res.status(200).json({
        status:"succsess",
        get_faculty
    })
 }

 exports.insert_faculty = async (req,res) => {


    var insert_faculty = await faculty.create(req.body);

    
    res.status(200).json({
        status:"succsess",
        insert_faculty
    })
 }

 exports.update_faculty = async (req,res) => {

    var id = req.params.id;

    var updatefaculty = await faculty.findByIdAndUpdate(id,req.body.fe);

    
    res.status(200).json({
        status:"succsess",
        updatefaculty
    })
 }

 exports.delete_faculty = async (req,res) => {

    var id = req.params.id;

    var deletefaculty = await faculty.findByIdAndDelete(id);

    
    res.status(200).json({
        status:"succsess",
        deletefaculty
    })
 }

 exports.faculty_id = async (req,res) => {

    var id = req.params.id;

    var faculty_id = await faculty.findById(id);

    
    res.status(200).json({
        status:"succsess",
        faculty_id
    })
 }

 exports.join_table = async (req,res) => {

    var join_table = await coursecontent.find().populate("course_id");

    
    res.status(200).json({
        status:"succsess",
        join_table
    })
 }

 

