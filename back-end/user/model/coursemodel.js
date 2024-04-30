var mongoose = require('mongoose')

var courseschema = new mongoose.Schema(
    {
        coursename:{
            type:String
        }
    }
)

module.exports = mongoose.model('course',courseschema)