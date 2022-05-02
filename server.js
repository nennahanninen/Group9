let express = require('express');
let app = express();

app.get('/fruits', (req, res, next) => {
    res.json(['Banana', 'Apple', 'Kiwi']);
    });

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

//导入并配置cors中间件
let cors = require('cors');
app.use(cors());

//配置解析表单数据中间件
app.use(express.urlencoded({ extended: false }))

//设置模版引擎相关信息
let ejs = require('ejs');

//设置模版的存放目录,第一个参数是固定的，第二个参数是模版存放目录（统计目录）
app.set('views','./views');

//定义使用的模版引擎,第一个模版引擎的名称（静态模版引擎的后缀），第二个参数是使用模版引擎的方法
app.engine("html",ejs.__express);

//在app中注册模版引擎,第一个参数固定不变，第二个与定义的模版引擎的名称有关
app.set("view engine", "html");

//设置静态资源的访问
app.use("/frontend", express.static(__dirname+"/frontend"));

//导入前台路由文件
let indexRouter = require('./router/index');
//使用前台的路由,参数一是匹配路由规则，参数二是请求路由规则
app.use('/',indexRouter);

let signUpRouter = require('./router/index');
app.use('/signup', signUpRouter);

//导入并使用注册/登录路由模块
let userRouter = require('./router/user');
app.use('/api',userRouter);

let cartRouter = require('./router/index');
app.use('/CART1',cartRouter);


app.listen(3000, function(){
    console.log('node 服务器已启动 port:3000')
})