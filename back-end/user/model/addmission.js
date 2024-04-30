var mongoose = require('mongoose')

var addmisssionschema = new mongoose.Schema({

    Regno:{
        type:Number
    },
    studentname:{
        type:String
    },
    coursename:{
        type:String
    },
    contect:{
        type:Number
    },
    subcontect:{
        type:Number
    },
})

module.exports = mongoose.model('addmission',addmisssionschema)