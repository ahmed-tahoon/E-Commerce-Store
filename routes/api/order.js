
const express = require('express');
const router = express.Router();
const Mongoose = require('mongoose');
const auth = require("../../middleware/auth")
const role = require("../../middleware/role")

const {add,search,GetOrders,order}=require('../../Controllers/order')

router.post('/add',auth,add)
router.get('/search',auth,search)
router.get('/',auth,GetOrders)
router.get('/orderId',order)

module.exports = router;
