const express = require('express');
const router = express.Router()
const auth = require("../../middleware/auth")
const role = require("../../middleware/role")
const {addBrand,listAdmin,list,brands,getOne,select,editBrand,active,deleteBrand} = require("../../Controllers/brand")
const authmerchant =require('../../middleware/authmerchant')


const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");


const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dwjy0lwss",
  api_key: "171926289684864",
  api_secret: "aCIRTZbBh1n4uII6O_ygGHptiHY",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "DEV",
  },
});

const upload = multer({ storage: storage });



router.post('/add',authmerchant,upload.single("picture"),addBrand)
router.get('/brandsList',list)
router.get('/admin/brandsList',auth,role.checkRole(role.ROLES.Admin),listAdmin)
router.get('/one/:merchant',brands)
router.get('/:id',getOne)
router.get('/brandslist/select',select)
router.put('/update/:id',upload.single("picture"),editBrand)
router.put("/active/:id",active)
router.delete("/delete/:id",authmerchant,deleteBrand)

module.exports = router;
