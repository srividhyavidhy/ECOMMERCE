const express = require("express");

const store_route = express();

const bodyParser = require("body-parser")
store_route.use(bodyParser.json());
store_route.use(bodyParser.urlencoded({extended:true}));

const multer = require("multer");
const path = require("path");

store_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/storeImages'),function(error,success){
             if(error) throw error
        });
    },
    filename:function(req,file,cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name,function(error1, success1){
            if(error1) throw error
        })
    }
});

const upload = multer({storage:storage});

const store_controller = require("../controllers/storeController");
const auth = require("../middleware/auth");
store_route.post('/create-store',auth,upload.single('logo'),store_controller.create_store);
//user_route.post('/login', user_controller.user_login);

//user_route.get('/test',auth,function(req,res){
//   res.status(200).send({success:true,msg:"Authenticated"})
//})
//update password route
//user_route.post('/update-password',auth,user_controller.update_password)

//forget-password
//user_route.post('/forget-password', user_controller.forget_password)

//user_route.get('/reset-password', user_controller.reset_password);

module.exports = store_route;