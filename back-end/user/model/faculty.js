var mongoose = require('mongoose')

var facultyschema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String
        },
        password:{
            type:String
        },
        contact:{
            type:String
        }
    }
)

module.exports = mongoose.model('faculty',facultyschema)