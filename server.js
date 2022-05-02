let express = require('express');
let app = express();

app.get('/fruits', (req, res, next) => {
    res.json(['Banana', 'Apple', 'Kiwi']);
    });

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

let cors = require('cors');
app.use(cors());


app.use(express.urlencoded({ extended: false }))


let ejs = require('ejs');


app.set('views','./views');


app.engine("html",ejs.__express);


app.set("view engine", "html");


app.use("/frontend", express.static(__dirname+"/frontend"));


let indexRouter = require('./router/index');

app.use('/',indexRouter);

let signUpRouter = require('./router/index');
app.use('/signup', signUpRouter);


let userRouter = require('./router/user');
app.use('/api',userRouter);

let cartRouter = require('./router/index');
app.use('/CART1',cartRouter);


app.listen(3000, function(){
    console.log('server listening at http://localhost:3000');
})