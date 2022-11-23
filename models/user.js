const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { ROLE_ADMIN, ROLE_MEMBER, ROLE_MERCHANT } = require('../constants');


const UserSchema = new Schema({

   name :{
       type: String
   },
   email :{
       type : String,
       required : true,
       unique: true
   },
   phoneNumber: {
    type: String
  },
  provider: {
    type: String,
    required: true,
    default: 'email'
  },
  avatar: {
    type: String
  },
  googleId: {
    type: String
  },
  facebookId: {
    type: String
  },
  role: {
    type: String,
    default: ROLE_MEMBER,
    enum: ["ROLE_ADMIN", "ROLE_MEMBER"]
  },
  password: {
    type: String,
    required: true
  },

},

{timestamps: true }

)

module.exports = mongoose.model('User', UserSchema);
