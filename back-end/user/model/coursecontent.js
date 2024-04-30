var mongoose = require('mongoose')

var coursecontentschema = new mongoose.Schema(
    {
        coursename: {
            type: String
        },
        courseduration: {
            type: String
        },
        coursecontent: {
            type: String
        },
        course_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "course"
        }
    }
)

module.exports = mongoose.model('coursecontent', coursecontentschema)