let express = require('express');
let mysql = require('mysql');
let sql = require('../config/mysql');
let router = express.Router()

//register
router.post('/reguser', (req, res, next) => {
   var user = req.body.user;
    res.send('reg ok!')
})
//login
router.post('/login', (req, res) => {
    res.send('login ok!')
})



module.exports = router
