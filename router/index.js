//导入express框架
let express = require('express');
let Database = require('../config/mysql');

//实例化路由类
let router = express.Router();

//开始书写路由规则
//home page
router.get('/', function(req, res,next) {
    //req request对象 保存客户端请求的相关信息
    //res response对象 服务器输入相应请求
    //next 执行下一个方法
    //res.send('我是网站首页');
    //加载首页页面
    res.render("frontend/index");
});
//分类列表

//登录页面

//注册页面
router.get('/signUp.html', function(req, res,next) {
    //req request对象 保存客户端请求的相关信息
    //res response对象 服务器输入相应请求
    //next 执行下一个方法
    //res.send('我是网站首页');
    //加载首页页面
    var sql = new Database();
    console.dir(sql);
    res.render("frontend/signUp");
});
//购物车
router.get('/CART1.html', function(req, res,next) {
    //req request对象 保存客户端请求的相关信息
    //res response对象 服务器输入相应请求
    //next 执行下一个方法
    //res.send('我是网站首页');
    //加载首页页面
    res.render("frontend/CART1");
});
//个人首页

module.exports = router;