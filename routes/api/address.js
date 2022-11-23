const express = require('express');
const router = express.Router()
const auth = require("../../middleware/auth")

const {add,alladdress,getOne,edit,deleteOne}=require('../../Controllers/address')


router.post('/add',auth,add)
router.get('alladdress',auth,alladdress)
router.get('/:id',getOne)
router.put('/:id',edit)
router.delete(':id',deleteOne)






module.exports = router;
