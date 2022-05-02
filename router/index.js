let express = require('express');
let Database = require('../config/mysql');


let router = express.Router();


//home page
router.get('/', function(req, res,next) {
    
    res.render("frontend/index");
});



router.get('/signUp.html', function(req, res,next) {
    
    var sql = new Database();
    console.dir(sql);
    res.render("frontend/signUp");
});
//cart
router.get('/CART1.html', function(req, res,next) {
   
    res.render("frontend/CART1");
});


module.exports = router;