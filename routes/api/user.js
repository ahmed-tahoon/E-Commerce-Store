const express = require('express');
const {search,deleteOne, getUsers,getMe,update} = require('../../Controllers/user')
const auth = require("../../middleware/auth")
const role = require("../../middleware/role")

const router = express.Router()

/////search for Users ////////

router.get('/search',
auth,
role.checkRole(role.ROLES.Admin),
search)

/////Get All Users ////////

router.get('/',auth,role.checkRole(role.ROLES.Admin),getUsers)


///////DeleteOne////////
router.delete('/delete/:id',auth,role.checkRole(role.ROLES.Admin),deleteOne)

////////Get ME ////////

router.get('/me',auth,getMe)


///////Update//////////
router.put('/update',auth,role.checkRole(role.ROLES.Customer,role.ROLES.Admin),update)


module.exports = router;
