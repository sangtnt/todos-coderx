var express= require ('express');
var app= express();
var userRoute= require('./router/user.route');
const bodyParser = require('body-parser')
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/',function(req,res){
    res.render('index', {
        name: "Sang",
    });
});
app.use('/users',userRoute);
var port=3000;
app.listen(port, function(){
    console.log("app listening on port "+port);
});