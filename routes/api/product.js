const express = require('express');
const auth = require("../../middleware/auth")
const role = require("../../middleware/role")
const {getItem,add,GetAll,search,addadmin,active,putadmin,listBrand,GetAllAdmin,listProduct,productsmerchant,product,put,Delete} = require("../../Controllers/product")
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const authmerchant =require('../../middleware/authmerchant')


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

const router = express.Router()


router.get("/item/:slug",getItem)
router.post('/merchant/add',authmerchant,upload.single("picture"),add)
router.post('/admin/add',auth,role.checkRole(role.ROLES.Admin),upload.single("picture"),addadmin)

router.get('/search/:name',search)
router.get('/list',listProduct)
router.get('/admin/list',auth,role.checkRole(role.ROLES.Admin),GetAllAdmin)
router.get('/admin/listALL',auth,role.checkRole(role.ROLES.Admin),GetAll)

router.put('/active/:id',active)
router.get('/list/brand/:slug',listBrand)
router.get('/merchant',authmerchant,productsmerchant)
router.put('/merchant/:id',authmerchant,upload.single("picture"),put)
router.put('/admin/:id',auth,role.checkRole(role.ROLES.Admin),upload.single("picture"),putadmin)

router.delete("/merchant/delete/:id",Delete)


module.exports = router;
