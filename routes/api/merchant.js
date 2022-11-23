const express = require('express');
const router = express.Router()
const {add,search,edit,getMerchantone, getMerchant,disableMerchan, approveMerchant,rejectMerchant, login} = require('../../Controllers/merchant')
const auth = require("../../middleware/auth")
const role = require("../../middleware/role")
const authmerchant =require('../../middleware/authmerchant')

router.post('/add',add)

// search merchants api


router.get('/search',auth,role.checkRole(role.ROLES.Admin),search)

// fetch all merchants api
router.get('/',auth,role.checkRole(role.ROLES.Admin),getMerchant)


//login
router.post("/login",login)

// disable merchant account
router.put('/active/:id', auth ,role.checkRole(role.ROLES.Admin),disableMerchan)

//fetchme

router.get('/me',getMerchantone)

router.put('/approve/:id',approveMerchant)

router.delete('/reject/:id',rejectMerchant)
//
router.put('/edit',authmerchant,edit)


module.exports = router;
