const express = require("express");

const product_route = express();

const bodyParser = require("body-parser")
product_route.use(bodyParser.json());
product_route.use(bodyParser.urlencoded({extended:true}));

const multer = require("multer");
const path = require("path");

product_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/productImages'),function(error,success){
             if(error) {
                throw error
             }
        });
    },
    filename:function(req,file,cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name,function(error1, success1){
            if(error1) {
                throw error1
            }
        })
    }
});

const upload = multer({storage:storage});

const product_controller = require("../controllers/productController");
const auth = require("../middleware/auth");
product_route.post('/add-product',auth,upload.array('images'),auth,product_controller.add_product);
//user_route.post('/login', user_controller.user_login);

product_route.get('/get-products',auth,product_controller.get_products);
//update password route
//user_route.post('/update-password',auth,user_controller.update_password)

//forget-password
//user_route.post('/forget-password', user_controller.forget_password)

product_route.get('/search-product',auth, product_controller.searchProduct);

module.exports = product_route;