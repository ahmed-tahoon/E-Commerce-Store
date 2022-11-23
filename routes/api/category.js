const express = require('express');
const router = express.Router()
const auth = require("../../middleware/auth")
const role = require("../../middleware/role")
const {add,getAlladmin,getAllUser,getone,editone,deleteone} = require("../../Controllers/category")
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


router.post('/add',auth,role.checkRole(role.ROLES.Admin),upload.single("picture"),add)
router.get('/admin/list',auth,role.checkRole(role.ROLES.Admin),getAlladmin)
router.get('/one/:id',getone)
router.get('/list',getAllUser)
router.put('/edit/:id',auth,role.checkRole(role.ROLES.Admin),upload.single("picture"),editone)
router.delete('/delete/:id',auth,role.checkRole(role.ROLES.Admin),deleteone)



module.exports = router;
