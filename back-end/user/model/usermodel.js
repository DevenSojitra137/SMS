var mongoose = require('mongoose')

var userschema = new mongoose.Schema(
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
        contect:{
            type:String
        }
    }
)

module.exports = mongoose.model('user',userschema)